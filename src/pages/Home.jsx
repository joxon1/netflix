import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";
import { useAuth } from "../hooks/useAuth";

const Home = () => {
  const { isAuth, email } = useAuth();
  return isAuth ? (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.reuqestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
    </>
  ) : (
    <div className="text-white">registratsiyadan ot</div>
  );
};

export default Home;
