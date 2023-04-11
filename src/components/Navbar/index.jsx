import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../localization/languages";

const Navbar = () => {
  const [lang, setLang] = useLocalization();
  const changeLang = (e) => {
    setLang(e.target.value);
    console.log(lang);
    window.location.reload();
  }
  return (
    <nav className="myNav">
      <div>
        <NavLink to={"/home"}>{languages[lang].header.nav.navItem1}</NavLink>
        <NavLink to={"/home/local"}>{languages[lang].header.nav.navItem2}</NavLink>
        <NavLink to={"/home/tech"}>{languages[lang].header.nav.navItem3}</NavLink>
        <NavLink to={"/home/sport"}>{languages[lang].header.nav.navItem4}</NavLink>
        <NavLink to={"/home/business"}>{languages[lang].header.nav.navItem5}</NavLink>
      </div>  

      <div className="d-flex align-items-center me-5">
        <div>
          <select className="form-select" value={lang} onChange={(e) => changeLang(e)}>
          <option value="uz">uz</option>
          <option value="ru">ru</option>
          <option value="en">en</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
