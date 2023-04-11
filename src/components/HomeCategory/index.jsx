import React from "react";
import Header from "../Header";
import { Link, useParams } from "react-router-dom";
import NewsPost from "../NewsPost";
import { api } from "../../utils/api";
import { useLocalization } from "../../hooks/useLocalization";
import { languages } from "../../localization/languages";

const HomeCategory = () => {
  const { category } = useParams();
  const [news, setNews] = React.useState([]);
  const [lang] = useLocalization();

  React.useEffect(() => {
    api(lang + "/news/category/" + category)
      .then((res) => setNews(res.data))
      .catch((err) => console.log(err));
  }, [category]);

  return (
    <>
      <Header></Header>
      <div className="container">
        <h4>{languages[lang].text.category}: {category}</h4>
        <div className="row">
          <h5>news founded {news[category]?.length || 0}</h5>
          <div className="col-8">
            <div className="row d-flex justify-content-around flex-wrap gap-3">
              {news[category]?.length > 0 &&
                news[category].map((item) => {
                  return (
                    <div className="col-5" key={item.id}>
                      <Link to={"/details/" + lang + "/" + item.id}>
                        <NewsPost newsOBJ={item}></NewsPost>
                      </Link>
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="col-4">
          <h5>{languages[lang].text.most_read}</h5>
            <div className="d-flex flex-column">
              {news?.most_read?.length > 0 &&
                news.most_read.map((item) => {
                  return (
                    <Link to={"/details/" + lang + "/" + item.id}>
                      <NewsPost newsOBJ={item} key={item.id}></NewsPost>
                    </Link>
                  );
                })}
            </div>
          </div>
          {/* //bu eng kom oqilgan */}
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default HomeCategory;
