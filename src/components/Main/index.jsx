import React, { useEffect } from "react";
import { useLocalization } from "../../hooks/useLocalization";
import { api } from "../../utils/api";
import TopNews from "../TopNews/TopNews";
import NewsPost from "../NewsPost";
import { Link } from "react-router-dom";
import { languages } from "../../localization/languages";

const MainHome = () => {
  const [news, setNews] = React.useState([]);
  const [lang] = useLocalization();

  useEffect(() => {
    console.log(lang);
    api(lang)
      .then((res) => setNews(res.data, console.log(res.data)))
      .catch((err) => console.log(err));
  }, [lang]);

  return (
    <main>
      <div className="container">
        <div className="row">
            <h4>{languages[lang].text.home_news}</h4>
          <div className="col-6">
            <TopNews news={news.top}></TopNews> 
          </div>
          <div className="col-6">
            <h4>{languages[lang].text.most_read}</h4>
            <div className="d-flex flex-column">
              {news.most_read?.length > 0 && (
                news.most_read.slice(0, 4).map((item) => {
                  return (
                      <Link to={'/details/'  + lang + '/' + item.id}>
                        <NewsPost newsOBJ={item} key={item.id}></NewsPost>
                      </Link>
                  )
                })
              )}
            </div>
          </div>
          </div>
      </div>
    </main>
  );
};

export default MainHome;
