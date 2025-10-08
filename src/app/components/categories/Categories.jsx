// "use client";
// import React from "react";
// import Slider from "react-slick";
// import CategoryCard from "@/app/utils/CategoryCard/categoryCard";
// import "./style.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";


// export default function Categories({categories}) {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 5, // ✅ show 5 at a time
//     slidesToScroll: 1,
//     arrows: true,
//     responsive: [
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 992,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="categories_slider">
//       <Slider {...settings}>
//         {categories?.map((cat) => (
//           <CategoryCard key={cat._id} id={cat._id} image={"https://api.delcofarmersmarket.com"+cat.image} />
//         ))}
//       </Slider>
//     </div>
//   );
// }



// "use client";
// import React from "react";
// import CategoryCard from "@/app/utils/CategoryCard/categoryCard";
// import "./style.css";

// export default function Categories({ categories }) {
//   return (
//     <div className="categories_grid">
//       {categories?.map((cat) => (
//         <CategoryCard
//           key={cat._id}
//           id={cat._id}
//           image={"https://api.delcofarmersmarket.com" + cat.image}
//         />
//       ))}
//     </div>
//   );
// }





"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
import "./style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoryContainer from "@/app/utils/categoryContainer/categoryContainer";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    &#10095;
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    &#10094;
  </div>
);

export default function Categories({ departments, onClick }) {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false, // ✅ don't loop, keeps alignment left
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: false, // ❌ slick ke apne arrows hata diye
    autoplay: false, // ✅ autoplay off (better for categories)
    responsive: [
      { breakpoint: 2000, settings: { slidesToShow: 6 } },
      { breakpoint: 1600, settings: { slidesToShow: 6 } },
      { breakpoint: 1200, settings: { slidesToShow: 6 } },
      { breakpoint: 992, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 6 } },
      { breakpoint: 480, settings: { slidesToShow: 6 } },
    ],
  };

  // ✅ Hide arrows if no need to scroll
  const showArrows = departments?.length > settings.slidesToShow;

  return (
    <div className="categories_slider_wrapper">
      {/* ✅ Prev Button outside */}
      {showArrows && (
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
      )}

      <div className="categories_slider">
        {/* <span className="heading">Shop from Seafood Shop</span> */}
        <Slider ref={sliderRef} {...settings}>
          {departments?.map((cat) => (
            <CategoryContainer
              key={cat._id}
              image={cat.image}
              name={cat.visi_name}
              onClick={() => onClick(cat._id)}
            />
          ))}
        </Slider>
      </div>

      {/* ✅ Next Button outside */}
      {showArrows && (
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      )}
    </div>
  );
}
