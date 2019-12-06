import React from "react";
import Thumbnail from "./Thumbnail";
import weaterIcon from "../assets/weather-app.png";
import todo from "../assets/todo-list.png";
import checkers from "../assets/checkers.png";
import "../styles/Project.css";

function Project() {
  return (
    <div className="projects">
      <h2 className="display-5 text-center" style={{color:"#24C6DC"}}>Check out some of my work</h2>
      <div className="row">
        {formatProjects()}
      </div>
    </div>
  );
}

function formatProjects() {
  const weatherDis =
    "Weather app developed with React. you can enter the city or get your location via geolocation";
  const todoDis =
    "Todo list app developed with React. you can add items to the list and delete them by clicking on the item";
  const checkersDis =
    "Checkers game developed with C#. game with 3 diffrent board sizes and option to play against the PC";

  const projects = [
    {
      homePage: "https://uri121.github.io/my-weather/",
      title: "Weather App",
      image: weaterIcon,
      category: "React",
      discription: weatherDis,
      link: "https://github.com/Uri121/my-weather"
    },
    {
      homePage: "https://uri121.github.io/todo-list/",
      title: "Todo List",
      image: todo,
      category: "React",
      discription: todoDis,
      link: "https://github.com/Uri121/todo-list"
    },
    {
      homePage: "#",
      title: "Checkers",
      image: checkers,
      category: "C#",
      discription: checkersDis,
      link: "https://github.com/Uri121/checkers"
    }
  ];
  return projects.map((reading, index) => (
    <Thumbnail reading={reading} key={index} />
  ));
}

export default Project;
