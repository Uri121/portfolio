import React from "react";
import Thumbnail from "./Thumbnail";
import weaterIcon from "../assets/weather-app.png";
import todo from "../assets/todo-list.png";
import stocks from "../assets/stocks.png";
import dayOrganizer from "../assets/day-organizer.png";
import tc from "../assets/Tc.png";

import "../styles/Project.css";

const Project = () => {
  return (
    <div className="projects">
      <div className="row no-gutters mt-5">{formatProjects()}</div>
    </div>
  );
};

function formatProjects() {
  const weatherDis =
    "Weather app developed with React. you can enter the city or get your location via geolocation";
  const todoDis =
    "Todo list app developed with React. you can add items to the list and delete by clicking on the item";
  const stocksDis =
    "Stocks app developed with React. choose from the stocks list the stock value u wish to see";
  const dayOrganizerDis =
    "Day organizer full stack up developed with React Express and mongoDB";
  const trelloClone =
    "Tc is a list-making application, you can add lists and cards to manage your daily work";

  const projects = [
    {
      homePage: "https://t-clone1221.herokuapp.com/",
      title: "Tc",
      image: tc,
      discription: trelloClone,
      link: "https://github.com/Uri121/trello-clone/"
    },
    {
      homePage: "https://uri121.github.io/stocks/",
      title: "Stocks",
      image: stocks,
      discription: stocksDis,
      link: "https://github.com/Uri121/stocks/"
    },
    {
      homePage: "https://react-day-organizer.herokuapp.com",
      title: "Day Organizer",
      image: dayOrganizer,
      discription: dayOrganizerDis,
      link: "https://github.com/Uri121/day-organizer"
    },
    {
      homePage: "https://uri121.github.io/my-weather/",
      title: "Weather App",
      image: weaterIcon,
      discription: weatherDis,
      link: "https://github.com/Uri121/my-weather"
    },
    {
      homePage: "https://uri121.github.io/todo-list/",
      title: "Todo List",
      image: todo,
      discription: todoDis,
      link: "https://github.com/Uri121/todo-list"
    },

  ];
  return projects.map((reading, index) => (
    <Thumbnail reading={reading} key={index} />
  ));
}

export default Project;
