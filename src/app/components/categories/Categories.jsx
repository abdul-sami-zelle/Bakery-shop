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



"use client";
import React from "react";
import CategoryCard from "@/app/utils/CategoryCard/categoryCard";
import "./style.css";

export default function Categories({ categories }) {
  return (
    <div className="categories_grid">
      {categories?.map((cat) => (
        <CategoryCard
          key={cat._id}
          id={cat._id}
          image={"https://api.delcofarmersmarket.com" + cat.image}
        />
      ))}
    </div>
  );
}

