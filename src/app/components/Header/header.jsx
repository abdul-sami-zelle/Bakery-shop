"use client";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";




import "./style.css";

export default function Header() {
    return (
        <header className="header">
            <div className="header_ticker">
                <div className="left_side_content_ticker">
                        <p><span style={{fontWeight:"600"}}>Free Shipping</span> Orders from all Items.</p>
                </div>
                <div className="right_side_content_ticker">
                    <div className="rsct_item">My Order</div>
                    <div className="rsct_item bordered">Track Order</div>
                    <div className="rsct_item">Contact Us</div>
                </div>
            </div>
            {/* First Line */}
            <div className="header-top">
                {/* Left - Phone */}
                <div className="header-phone">
                    <a href="">
                        <FaHeadphones className="head_icon" />
                        <p> +1 234 567 890</p>
                    </a>
                </div>

                {/* Center - Logo */}
                <div className="header-logo">
                    <img src="/assets/Images/edit-logo.png" alt="" srcset="" />
                </div>

                {/* Right - Icons */}
                <div className="header-icons">
                    <button aria-label="Login"><FaRegUser /></button>
                    <button aria-label="Favorite"><FaRegHeart /></button>
                    <button aria-label="Cart"><FaBagShopping /></button>
                </div>
            </div>
            {/* Second Line */}
            <div className="header-bottom">
                {/* Left - Navigation */}
                <nav className="header-nav">
                    <a href="#">Home</a>
                    <a href="#">Shop</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                </nav>

                {/* Right - Search Bar */}
                <div className="header-search">
                    <input type="text" placeholder="Search..." />
                    <FaSearch className="search-icon" />
                </div>
            </div>
        </header>
    );
}
