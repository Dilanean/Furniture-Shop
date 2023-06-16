import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bagImg from "./../images/bag.png";
import { BsArrowDownShort } from "react-icons/bs";
import burgerMenuImg from "./../images/burger-menu.png";
import { useGlobalContext } from "../context/context";
import { Link as LinkScroll } from "react-scroll";
const Navbar = () => {
  const { itemsCounter, filterProducts } = useGlobalContext();
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const [activeNavbar, setActiveNavbar] = useState(false);
  const [showNavFurnitures, setShowNavFurnitures] = useState(false);
  const [showMobileNavFurnitures, setShowMobileNavFurnitures] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setActiveNavbar(true);
      } else {
        setActiveNavbar(false);
      }
    });
  }, []);

  return (
    <nav className={`${activeNavbar ? "active" : ""}`}>
      <Link to="/" className="logo">
        Furniture
      </Link>

      <ul className="menu_list">
        <li
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setShowNavFurnitures(!showNavFurnitures)}
        >
          Furniture <BsArrowDownShort className="furniture_arrow" />
        </li>

        <ul className={`nav_furnitures ${showNavFurnitures ? "active" : " "}`}>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("chairs");
                setShowNavFurnitures(false);
              }}
            >
              Chairs
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("beds");
                setShowNavFurnitures(false);
              }}
            >
              Beds
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("sofas");
                setShowNavFurnitures(false);
              }}
            >
              Sofas
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("armchairs");
                setShowNavFurnitures(false);
              }}
            >
              Armchairs
            </LinkScroll>
          </li>
        </ul>

        <li>
          <LinkScroll to="shop" smooth={true} duration={1000}>
            Shop
          </LinkScroll>
        </li>

        <li>
          <LinkScroll to="about_us" smooth={true} duration={1000}>
            About Us
          </LinkScroll>
        </li>

        <li>
          <LinkScroll to="footer" smooth={true} duration={1000}>
            Contacts
          </LinkScroll>
        </li>
      </ul>

      <ul className={`mobile_menu-list ${showBurgerMenu ? "active" : " "}`}>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onClick={() => setShowMobileNavFurnitures(!showMobileNavFurnitures)}
        >
          Furniture <BsArrowDownShort />
        </li>
        <ul
          className={`nav_furnitures_mobile ${
            showMobileNavFurnitures ? "active" : " "
          }`}
        >
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("chairs");
                setShowBurgerMenu(false);
                setShowMobileNavFurnitures(false);
              }}
            >
              Chairs
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("beds");
                setShowBurgerMenu(false);
                setShowMobileNavFurnitures(false);
              }}
            >
              Beds
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("sofas");
                setShowBurgerMenu(false);
                setShowMobileNavFurnitures(false);
              }}
            >
              Sofas
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="shop"
              smooth={true}
              duration={1000}
              onClick={() => {
                filterProducts("armchairs");
                setShowBurgerMenu(false);
                setShowMobileNavFurnitures(false);
              }}
            >
              Armchairs
            </LinkScroll>
          </li>
        </ul>
        <li>
          <LinkScroll
            to="shop"
            smooth={true}
            duration={1000}
            onClick={() => {
              setShowBurgerMenu(false);
              setShowMobileNavFurnitures(false);
            }}
          >
            Shop
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="about_us"
            smooth={true}
            duration={1000}
            onClick={() => {
              setShowBurgerMenu(false);
              setShowMobileNavFurnitures(false);
            }}
          >
            About Us
          </LinkScroll>
        </li>
        <li>
          <LinkScroll
            to="footer"
            smooth={true}
            duration={1000}
            onClick={() => {
              setShowBurgerMenu(false);
              setShowMobileNavFurnitures(false);
            }}
          >
            Contacts
          </LinkScroll>
        </li>
      </ul>

      <div className="nav-icons">
        <div className="bag">
          <Link to="/cart" onClick={() => window.scrollTo(0, 0)}>
            <img className="bag_img" src={bagImg} alt="bag image" />
          </Link>
          <div className="products_counter">{itemsCounter}</div>
        </div>
        <img
          className="burger_menu--img"
          src={burgerMenuImg}
          alt="burger menu image"
          onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
