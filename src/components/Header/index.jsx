import React from "react";
import MyButton from "../Button";
import Navbar from "../Navbar";
import "./Header.scss";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../localization/languages";

const Header = () => {
  const [lang, setLang] = useLocalization();
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <h3>NEWSLETTER</h3>
          <form>
            <input type="search" placeholder={languages[lang].header.header.searchInput} />
            <MyButton bgColor={"#8E4042"} type="submit">
              {languages[lang].header.header.searchBtn}
            </MyButton>
          </form>
        </div>
        <Navbar></Navbar>
      </div>
    </header>
  );
};

export default Header;
