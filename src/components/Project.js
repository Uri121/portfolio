import React from "react";
import Thumbnail from "./Thumbnail";
import weaterIcon from "../assets/weather-app.png";
import todo from "../assets/todo-list.png";
import checkers from "../assets/checkers.png";
import portfolio from "../assets/portfolio.png";
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
  const checkersDis =
    "Checkers game developed with C#. game with 3 diffrent board sizes, option to play against the PC";
  const portfolioDis =
    "Portfolio website developed with React. With respovsive design and clean animations";
  const dayOrganizerDis =
    "Day organizer full stack up developed with React Express and mongoDB";
  const trelloClone =
    "Tc is a list-making application, you can add lists and cards to manage your daily work.";

  const projects = [
    {
      homePage: "https://t-clone1221.herokuapp.com/",
      title: "Tc",
      image: tc,
      discription: trelloClone,
      link: "https://github.com/Uri121/trello-clone/"
    },
    {
      homePage: "https://uri121.github.io/my-weather/",
      title: "Weather App",
      image: weaterIcon,
      discription: weatherDis,
      link: "https://github.com/Uri121/my-weather"
    },
    {
      homePage: "https://react-day-organizer.herokuapp.com",
      title: "Day Organizer",
      image: dayOrganizer,
      discription: dayOrganizerDis,
      link: "https://github.com/Uri121/day-organizer"
    },
    {
      homePage: "https://uri121.github.io/todo-list/",
      title: "Todo List",
      image: todo,
      discription: todoDis,
      link: "https://github.com/Uri121/todo-list"
    },
    {
      homePage: "#",
      title: "Checkers",
      image: checkers,
      discription: checkersDis,
      link: "https://github.com/Uri121/checkers"
    },
    {
      homePage: "https://uri121.github.io/portfolio/",
      title: "Portfolio",
      image: portfolio,
      discription: portfolioDis,
      link: "https://github.com/Uri121/portfolio"
    }
  ];
  return projects.map((reading, index) => (
    <Thumbnail reading={reading} key={index} />
  ));
}

export default Project;
