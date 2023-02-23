/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import PageLayout from "../../layout/default-layout";
import Card from "../../components/card/card"
import trendingData from "./trending-data";

const Home = () => {
  return (
    <PageLayout>
    <div className=" home-banner">
      <h1 className="home-text">Your tech buddy to <br/>building confidence... </h1>
  </div>
  <div className="">
  <div className=" row">   
    {
      trendingData.map((data, id) => {
        return(
          <Card
          img ={data.img}
          cardText={data.cardText}
          dateText={data.dateText}
          readText={data.readText}
          locationText={data.locationText}
          name ={data.name}
          nameimage={data.nameimage}
          />
        )
      })
    }
  </div>
  </div>


    </PageLayout>
  );
};

export default Home;
