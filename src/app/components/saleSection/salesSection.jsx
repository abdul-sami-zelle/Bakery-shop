// import React from "react";
// import "./style.css";

// export default function SalesSection() {
//     return (
//         <div className="sale_section">
//             <div className="sale_section_sale">
//                 <img src="./assets/banners/sb_1.jpg" />
//             </div>
//             <div className="sale_section_sale">
//                 <img src="./assets/banners/sb_2.jpg" />
//             </div>
//             <div className="sale_section_sale">
//                 <img src="./assets/banners/sb_1.jpg" />
//             </div>
//         </div>
//     )
// }


"use client";
import React, { useEffect, useRef } from "react";
import "./style.css";

export default function SaleSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 } // 20% section dikhte hi trigger hoga
    );

    const cards = sectionRef.current.querySelectorAll(".sale_section_sale");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <div className="sale_section" ref={sectionRef}>
      <div className="sale_section_sale">
        <img src="./assets/banners/sb_1.jpg" alt="sale 1" />
      </div>
      <div className="sale_section_sale">
        <img src="./assets/banners/sb_2.jpg" alt="sale 2" />
      </div>
      <div className="sale_section_sale">
        <img src="./assets/banners/sb_3.jpg" alt="sale 3" />
      </div>
      <div className="sale_section_sale">
        <img src="./assets/banners/sb_4.jpg" alt="sale 4" />
      </div>
    </div>
  );
}
