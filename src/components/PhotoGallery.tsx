// // components/TinyImageSlider.tsx
// import React, { useRef } from "react";

// const images = [
//   "/images/three.jpeg",
//   "/images/two.jpeg",
//   "/images/photo3.jpg",
//   "/images/photo4.jpg",
// ];

// const TinyImageSlider: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const scrollNext = () => {
//     containerRef.current?.scrollBy({ left: -140, behavior: "smooth" });
//   };

//   const scrollPrev = () => {
//     containerRef.current?.scrollBy({ left: 140, behavior: "smooth" });
//   };

//   return (
//     <div className="flex items-center space-x-2 rtl:space-x-reverse max-w-xs mx-auto">
//       <button
//         onClick={scrollPrev}
//         className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//       >
//         ◀
//       </button>

//       <div
//         ref={containerRef}
//         className="overflow-x-auto whitespace-nowrap flex flex-row-reverse scroll-smooth w-36 border rounded"
//       >
//         {images.map((src, idx) => (
//           <img
//             key={idx}
//             src={src}
//             alt={`Slide ${idx + 1}`}
//             className="inline-block h-20 w-32 object-cover mx-1"
//           />
//         ))}
//       </div>

//       <button
//         onClick={scrollNext}
//         className="text-sm px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//       >
//         ▶
//       </button>
//     </div>
//   );
// };

// export default TinyImageSlider;


// components/MovingImageSlider.tsx
import React, { useEffect, useRef } from "react";

const images = [
  "/images/three.jpeg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
  "/images/photo4.jpg",
];

const MovingImageSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    let startPos = 0;
    const moveSlider = () => {
      if (container) {
        startPos = (startPos + 1) % images.length;
        container.style.transform = `translateX(-${startPos * 100}%)`;
      }
    };

    const interval = setInterval(moveSlider, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-36 h-[192px] overflow-hidden border rounded-md shadow-md relative">
      <div
        ref={containerRef}
        className="flex transition-transform duration-1000 ease-in-out"
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Slide ${idx + 1}`}
            className="w-12 object-cover h-[192px]"
          />
        ))}
      </div>
    </div>
  );
};

export default MovingImageSlider;
