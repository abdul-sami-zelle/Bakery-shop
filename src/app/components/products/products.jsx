"use client";
import React, { useState } from "react";
import ProductCard from "@/app/utils/ProductCard/productCard";
import "./style.css";


export default function ProductSlider({ catName, productData, sectionalImage }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const visibleSlides = 5; // kitne ek sath dikhane hain

    const nextSlide = () => {
        if (currentIndex < productData.length - visibleSlides) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="category_products_sections">

            <h2 className="section_heading">{catName}</h2>

            <div className="product_slider">
                <button className="arrow left" onClick={prevSlide}>
                    ◀
                </button>
                <div className="slider_window">
                    <div
                        className="slider_track"
                        style={{
                            transform: `translateX(-${(100 / visibleSlides) * currentIndex}%)`,
                        }}
                    >
                        {productData?.map((item) => (
                            <div
                                className="slide"
                                style={{ flex: `0 0 ${100 / visibleSlides}%` }}
                                key={item.id}
                            >
                                <ProductCard item={item} />
                            </div>
                        ))}
                    </div>
                    <div className="sectional_image">
                        <img src={"https://api.delcofarmersmarket.com" + sectionalImage} alt="" />
                    </div>
                </div>
                <button className="arrow right" onClick={nextSlide}>
                    ▶
                </button>
            </div>



        </div>
    );
}
