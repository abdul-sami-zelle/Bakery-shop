"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
// import Header from "./components/Header/header";
import Hero from "./components/HeroSection/herosection";
import Categories from "./components/categories/Categories";
import ProductSlider from "./components/products/products";
import { getLandingPageData } from "./lib/api";
import SalesSection from "./components/saleSection/salesSection";
import MainSlider from "./components/mainSlider/mainSlider";
import Header from "./utils/Header/Header";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const landingPage = await getLandingPageData();
      if (landingPage) {
        setCategories(landingPage.featured_categories || []);
        setSections(landingPage.sections || []);
      }
    }
    fetchData();
  }, []);

  return (
    <div >
      <Header />
      <MainSlider/>
      <SalesSection/>
      <div className="main_sections">

        {/* Pass categories and sections as props */}


        {sections && sections?.map((data) => (
          <ProductSlider productData={data?.products} catName={data?.category?.visi_name} sectionalImage={data?.bannerImage} />
        ))}
        <Categories categories={categories} />
      </div>
    </div>
  );
}