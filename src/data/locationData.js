// src/data/locationData.js

const defaultLocationData = {
  topTag: "हमारा सेवा क्षेत्र (Service Location)",
  mainHeading: "समग्र उज्जैन और निकटवर्ती क्षेत्रों में वैदिक सेवाएं उपलब्ध",
  description: "हम पूर्ण उज्जैन, मध्य प्रदेश और इसके आसपास के क्षेत्रों में आपके घर, दुकान, प्रतिष्ठान या कार्यालय में आकर संपूर्ण विधि-विधान और शुद्धता के साथ सभी धार्मिक अनुष्ठान एवं पूजा संपन्न करते हैं।",
  mapEmbedUrl: "https://maps.google.com/maps?q=Ujjain%2C%20Madhya%20Pradesh&hl=hi&z=13&output=embed",
  cardTag: "मुख्य केंद्र",
  cardHeading: "उज्जैन, मध्य प्रदेश",
  cardDescription: "यदि आप उज्जैन से बाहर किसी अन्य शहर या राज्य में बड़े महायज्ञ, श्रीमद्भागवत कथा, या विशेष अनुष्ठान का आयोजन करवाना चाहते हैं, तो कृपया समय से पूर्व बुकिंग के लिए हमसे संपर्क करें।"
};

// लोकल स्टोरेज से डेटा लोड या रीसेट करने के लिए हेल्पर फंक्शन्स
export const getLiveLocationData = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("pandit_location_data");
    return saved ? JSON.parse(saved) : defaultLocationData;
  }
  return defaultLocationData;
};

export const saveLiveLocationData = (data) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("pandit_location_data", JSON.stringify(data));
  }
};