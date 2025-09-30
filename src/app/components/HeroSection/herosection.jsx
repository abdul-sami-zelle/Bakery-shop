"use client";
import { useEffect, useState } from "react";
import "./style.css";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // trigger animation when component mounts
    setAnimate(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className={`hero-content ${animate ? "show" : ""}`}>
          <h1>Welcome to Our Store</h1>
          <p>
            Discover amazing products and deals made just for you.
            Shop with confidence and style.
          </p>
          <button>Shop Now</button>
        </div>
      </div>
    </section>
  );
}
