import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { api } from "../../utils/api";
import NewsPost from "../NewsPost";
import MyButton from "../Button";
import { languages } from "../../localization/languages";

const Details = () => {
  const { lang, news_id } = useParams();
  const [news, setNews] = React.useState([]);
  api(lang + "/news/" + news_id)
    .then((res) => setNews(res.data))
    .catch((err) => console.log(err));

    const handleNavigate = () => {
      return () => {
        window.location.href = '/home';
      }
    }
  return (
    <>
      <main className="mainDetail container">
        <div className="aboutDetail d-flex align-items-center justify-content-between mt-3 mb-3">
            <h4>{languages[lang].text.category} ID: {news_id}</h4>
            <h4>{languages[lang].text.lang}: {lang}</h4>
          <MyButton isRounded={true} bgColor={"#1A1A1A"} onClick={handleNavigate()}>{languages[lang].text.home}</MyButton>
        </div>

        <div className="row">
          <div className="col-8">
            <img
              src={news?.detail?.image_url}
              width={"100%"}
              height={"450px"}
            />
            <h4 className="mt-4">{news?.detail?.title}</h4>
            <p>{news?.detail?.text}</p>
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
        </div>
      </main>
    </>
  );
};

export default Details;
