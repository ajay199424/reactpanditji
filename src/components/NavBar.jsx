import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSectionClick = (section) => {
    setOpen(false);

    // Home page par already hain
    if (location.pathname === "/") {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      return;
    }

    // Kisi SEO page par hain
    // Pehle Home par jao, phir section scroll karo
    navigate(`/#${section}`);
  };

  return (
    <nav
      className={`text-white w-full fixed z-50 top-0 transition-all duration-300 ${
        scrolled ? "bg-darkbrown/90" : "bg-darkbrown/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="text-2xl amaranth-regular font-bold"
          >
            <motion.span
              animate={{
                rotate: [0, 5, -5, 3, -3, 0],
                y: [0, -2, 2, -1, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block text-orange-200"
            >
              ॐ
            </motion.span>{" "}
            Vedic Poojan
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">

            {/* Home */}
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-yellow-400 transition"
            >
              Home
            </Link>

            {/* Videos */}
            <button
              type="button"
              onClick={() => handleSectionClick("videos")}
              className="hover:text-yellow-400 transition"
            >
              Videos
            </button>

            {/* Services */}
            <button
              type="button"
              onClick={() => handleSectionClick("services")}
              className="hover:text-yellow-400 transition"
            >
              Services
            </button>

            {/* Gallery */}
            <button
              type="button"
              onClick={() => handleSectionClick("gallery")}
              className="hover:text-yellow-400 transition"
            >
              Gallery
            </button>

            {/* About */}
            <button
              type="button"
              onClick={() => handleSectionClick("about")}
              className="hover:text-yellow-400 transition"
            >
              About
            </button>

            {/* Contact */}
            <button
              type="button"
              onClick={() => handleSectionClick("contact")}
              className="hover:text-yellow-400 transition"
            >
              Contact
            </button>

            {/* Reviews */}
            <button
              type="button"
              onClick={() => handleSectionClick("reviews")}
              className="hover:text-yellow-400 transition"
            >
              Reviews
            </button>

            {/* Location */}
            <button
              type="button"
              onClick={() => handleSectionClick("location")}
              className="hover:text-yellow-400 transition"
            >
              Location
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="text-3xl"
              aria-label="Toggle navigation menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-64 bg-[#240a00] shadow-lg z-50 p-6 md:hidden"
          >
            <div className="flex justify-end mb-8">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="text-3xl"
                aria-label="Close navigation menu"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col space-y-6 text-lg">

              {/* Home */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                Home
              </Link>

              {/* Videos */}
              <button
                type="button"
                onClick={() => handleSectionClick("videos")}
                className="text-left hover:text-yellow-400 transition"
              >
                Videos
              </button>

              {/* Services */}
              <button
                type="button"
                onClick={() => handleSectionClick("services")}
                className="text-left hover:text-yellow-400 transition"
              >
                Services
              </button>

              {/* Gallery */}
              <button
                type="button"
                onClick={() => handleSectionClick("gallery")}
                className="text-left hover:text-yellow-400 transition"
              >
                Gallery
              </button>

              {/* About */}
              <button
                type="button"
                onClick={() => handleSectionClick("about")}
                className="text-left hover:text-yellow-400 transition"
              >
                About
              </button>

              {/* Contact */}
              <button
                type="button"
                onClick={() => handleSectionClick("contact")}
                className="text-left hover:text-yellow-400 transition"
              >
                Contact
              </button>

              {/* Reviews */}
              <button
                type="button"
                onClick={() => handleSectionClick("reviews")}
                className="text-left hover:text-yellow-400 transition"
              >
                Reviews
              </button>

              {/* Location */}
              <button
                type="button"
                onClick={() => handleSectionClick("location")}
                className="text-left hover:text-yellow-400 transition"
              >
                Location
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;


// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
// const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     setScrolled(window.scrollY > 50);
//   };

//   window.addEventListener("scroll", handleScroll);

//   return () => {
//     window.removeEventListener("scroll", handleScroll);
//   };
// }, []);

//   return (
//     <nav
//   className={`text-white w-full fixed z-20 top-0 transition-all duration-300 ${
//     scrolled ? "bg-darkbrown/80" : "bg-darkbrown/20"
//   }`}
// >
//      {/* <nav className="text-white bg-darkbrown/20 w-full fixed z-20 top-0"> */}
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16  ">
//           <a href="#home" className="text-2xl amaranth-regular font-bold">
//             <motion.span
//               animate={{
//                 rotate: [0, 5, -5, 3, -3, 0],
//                 y: [0, -2, 2, -1, 1, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="inline-block text-orange-200"
//             >
//               ॐ
//             </motion.span>{" "}
//             Vedic Poojan
//           </a>

//           <div className="hidden md:flex space-x-6 ">
//             <a href="#home" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//               Home
//             </a>
//             <a href="#videos" className="hover:text-yellow-400">
//               Videos
//             </a>
//             <a href="#services" className="hover:text-yellow-400">
//               Services
//             </a>
//             <a href="#gallery" className="hover:text-yellow-400">
//               Gallery
//             </a>
//             <a href="#about" className="hover:text-yellow-400">
//               About
//             </a>
//             <a href="#contact" className="hover:text-yellow-400">
//               Contact
//             </a>
//             <a href="#reviews" className="hover:text-yellow-400">
//               Reviews
//             </a>
//             <a href="#location" className="hover:text-yellow-400">
//               Location
//             </a>
//           </div>

//           {/* Mobile Button */}
//           <div className="md:hidden">
//             <button onClick={() => setOpen(!open)} className="text-3xl">
//               {open ? "✕" : "☰"}
//             </button>
//           </div>
//         </div>
//       </div>

//       <AnimatePresence>
//         {open && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 h-full w-64 bg-[#240a00] shadow-lg z-50 p-6 md:hidden"
//           >
//             <div className="flex justify-end mb-8">
//               <button onClick={() => setOpen(false)} className="text-3xl">
//                 ✕
//               </button>
//             </div>

//             <div className="flex flex-col space-y-6 text-lg ">
//               <a href="#home" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Home
//               </a>
//               <a href="#videos" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Videos
//               </a>
//               <a href="#services" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Services
//               </a>
//               <a href="#gallery" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Gallery
//               </a>
//               <a href="#about" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 About
//               </a>
//               <a href="#contact" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Contact
//               </a>
//               <a href="#reviews" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Reviews
//               </a>
//               <a href="#location" onClick={()=> setOpen(false)}  className="hover:text-yellow-400">
//                 Location
//               </a>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
