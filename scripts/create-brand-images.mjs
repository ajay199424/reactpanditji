import { deflateSync } from "node:zlib";
import { writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

const FONT = {
  " ": ["00000", "00000", "00000", "00000", "00000", "00000", "00000"],
  A: ["01110", "10001", "10001", "11111", "10001", "10001", "10001"],
  B: ["11110", "10001", "10001", "11110", "10001", "10001", "11110"],
  C: ["01111", "10000", "10000", "10000", "10000", "10000", "01111"],
  D: ["11110", "10001", "10001", "10001", "10001", "10001", "11110"],
  E: ["11111", "10000", "10000", "11110", "10000", "10000", "11111"],
  G: ["01111", "10000", "10000", "10111", "10001", "10001", "01110"],
  H: ["10001", "10001", "10001", "11111", "10001", "10001", "10001"],
  I: ["11111", "00100", "00100", "00100", "00100", "00100", "11111"],
  J: ["00111", "00010", "00010", "00010", "00010", "10010", "01100"],
  K: ["10001", "10010", "10100", "11000", "10100", "10010", "10001"],
  L: ["10000", "10000", "10000", "10000", "10000", "10000", "11111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["10001", "11001", "10101", "10011", "10001", "10001", "10001"],
  O: ["01110", "10001", "10001", "10001", "10001", "10001", "01110"],
  P: ["11110", "10001", "10001", "11110", "10000", "10000", "10000"],
  R: ["11110", "10001", "10001", "11110", "10100", "10010", "10001"],
  S: ["01111", "10000", "10000", "01110", "00001", "00001", "11110"],
  T: ["11111", "00100", "00100", "00100", "00100", "00100", "00100"],
  U: ["10001", "10001", "10001", "10001", "10001", "10001", "01110"],
  V: ["10001", "10001", "10001", "10001", "10001", "01010", "00100"],
};

function crc32(buf) {
  let c = ~0;
  for (let i = 0; i < buf.length; i += 1) {
    c ^= buf[i];
    for (let k = 0; k < 8; k += 1) {
      c = (c >>> 1) ^ (0xedb88320 & -(c & 1));
    }
  }
  return ~c >>> 0;
}

function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const typeBuf = Buffer.from(type);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])));
  return Buffer.concat([length, typeBuf, data, crc]);
}

function createPng(width, height, paint) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    for (let x = 0; x < width; x += 1) {
      const [r, g, b, a] = paint(x, y, width, height);
      const i = row + 1 + x * 4;
      raw[i] = r;
      raw[i + 1] = g;
      raw[i + 2] = b;
      raw[i + 3] = a;
    }
  }

  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;

  return Buffer.concat([
    Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
    chunk("IHDR", ihdr),
    chunk("IDAT", deflateSync(raw)),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

function blend(base, color, alpha) {
  const t = alpha / 255;
  return [
    Math.round(base[0] * (1 - t) + color[0] * t),
    Math.round(base[1] * (1 - t) + color[1] * t),
    Math.round(base[2] * (1 - t) + color[2] * t),
    255,
  ];
}

function background(x, y, width, height) {
  const dx = (x - width / 2) / width;
  const dy = (y - height / 2) / height;
  const distance = Math.min(1, Math.sqrt(dx * dx + dy * dy) * 1.7);
  return [
    Math.round(122 + (42 - 122) * distance),
    Math.round(36 + (9 - 36) * distance),
    Math.round(46 + (12 - 46) * distance),
    255,
  ];
}

function textWidth(text, scale) {
  return text.length * (5 * scale + scale) - scale;
}

function stampText(canvas, text, centerX, y, scale, color) {
  let cursor = Math.round(centerX - textWidth(text, scale) / 2);
  for (const char of text) {
    const glyph = FONT[char] || FONT[" "];
    glyph.forEach((row, rowIndex) => {
      for (let col = 0; col < row.length; col += 1) {
        if (row[col] !== "1") continue;
        for (let py = 0; py < scale; py += 1) {
          for (let px = 0; px < scale; px += 1) {
            const targetX = cursor + col * scale + px;
            const targetY = y + rowIndex * scale + py;
            if (canvas.pixels.has(`${targetX},${targetY}`)) continue;
            canvas.pixels.set(`${targetX},${targetY}`, color);
          }
        }
      }
    });
    cursor += 5 * scale + scale;
  }
}

function stampFlame(canvas, cx, cy, scale) {
  const saffron = [245, 158, 11, 255];
  const cream = [255, 236, 200, 255];
  for (let y = -18 * scale; y <= 8 * scale; y += 1) {
    const t = (y + 18 * scale) / (26 * scale);
    const half = (1 - t) * 7 * scale + Math.sin(t * Math.PI) * 4 * scale;
    for (let x = -half; x <= half; x += 1) {
      canvas.pixels.set(
        `${Math.round(cx + x)},${Math.round(cy + y)}`,
        Math.abs(x) < half * 0.45 ? cream : saffron,
      );
    }
  }
}

function paintCard(width, height) {
  const canvas = { pixels: new Map() };
  const saffron = [245, 158, 11, 255];
  const cream = [243, 217, 177, 255];

  stampFlame(canvas, width / 2, height * 0.3, Math.round(width / 280));
  stampText(canvas, "VEDIC POOJAN", width / 2, Math.round(height * 0.48), Math.round(width / 78), cream);
  stampText(canvas, "UJJAIN", width / 2, Math.round(height * 0.66), Math.round(width / 110), saffron);
  stampText(
    canvas,
    "MANGAL BHAT AND KAAL SARP",
    width / 2,
    Math.round(height * 0.8),
    Math.round(width / 190),
    cream,
  );

  return (x, y) => {
    const margin = Math.round(width * 0.03);
    const base = background(x, y, width, height);
    const onFrame =
      (x >= margin && x < margin + 4 && y >= margin && y < height - margin) ||
      (x <= width - margin && x > width - margin - 4 && y >= margin && y < height - margin) ||
      (y >= margin && y < margin + 4 && x >= margin && x < width - margin) ||
      (y <= height - margin && y > height - margin - 4 && x >= margin && x < width - margin);

    if (onFrame) return saffron;
    return canvas.pixels.get(`${x},${y}`) || base;
  };
}

function paintIcon(width, height) {
  const canvas = { pixels: new Map() };
  stampFlame(canvas, width / 2, height * 0.56, Math.max(2, Math.round(width / 42)));
  return (x, y) => {
    const base = background(x, y, width, height);
    const dx = x - width / 2;
    const dy = y - height / 2;
    const radius = width * 0.38;
    if (dx * dx + dy * dy > radius * radius) return base;
    return canvas.pixels.get(`${x},${y}`) || blend(base, [245, 158, 11], 40);
  };
}

const paintOg = paintCard(1200, 630);
const paintFavicon = paintIcon(192, 192);
const og = createPng(1200, 630, (x, y) => paintOg(x, y));
const icon = createPng(192, 192, (x, y) => paintFavicon(x, y));

writeFileSync(resolve(root, "public/og-image.png"), og);
writeFileSync(resolve(root, "public/favicon.png"), icon);
console.log("Wrote public/og-image.png and public/favicon.png");
