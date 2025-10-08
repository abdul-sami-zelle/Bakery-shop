"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/HeroSection/herosection";
import Categories from "./components/categories/Categories";
import ProductSlider from "./components/products/products";
import { getLandingPageData } from "./lib/api";
import SalesSection from "./components/saleSection/salesSection";
import MainSlider from "./components/mainSlider/mainSlider";
import Header from "./utils/Header/Header";
import Footer from "./components/Footer/Footer";
import FtBanner from "./components/footerBanner/ftBanner";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [scrollToSection, setScrollToSection] = useState(null);

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

  const sectionRefs = useRef({});


  useEffect(() => {
    if (scrollToSection && sectionRefs.current[scrollToSection]) {
      const element = sectionRefs.current[scrollToSection];
      const headerHeight = 80; // <-- yahan apne header ki actual height px me set karo

      const offsetTop = element.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, [scrollToSection]);

  return (
    <div>
      <Header onDeptClick={(deptName) => setScrollToSection(deptName)}  />
      <MainSlider  />

      <Categories departments={categories} onClick={(deptName) => setScrollToSection(deptName)} />
      <div className="main_sections">
        {sections &&
          sections.map((data, index) => (
            <React.Fragment key={index} >
              <div
                key={index}
                ref={(el) => (sectionRefs.current[data?.category?._id?._id] = el)}
              >
                <ProductSlider
                  productData={data?.products}
                  catName={data?.category?.visi_name}
                  sectionalImage={data?.bannerImage}
                />

                {/* Show SalesSection after index 2 */}
                {index === 2 && <SalesSection />}
              </div>

            </React.Fragment>
          ))}


      </div>
      <FtBanner/>
      <Footer/>
    </div>
  );
}
