import React from "react";
import Thumbnail from "./Thumbnail";
import weaterIcon from "../assets/weather-app.png";
import todo from "../assets/todo-list.png";

function Project() {
  return (
    <div className="projects">
      <h2 className="display-4 text-center">Check out some of my work</h2>
      <div className="row">
        {formatProjects()}
      </div>
    </div>
  );
}

function formatProjects() {
  const weatherDis =
    "A simple weather app developed with react. you can enter the city or get your location via geolocation";
  const todoDis =
    "A simple todo list app developed with react. you can add items to the list and delete them by clicking on the item";

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
    }
  ];
  return projects.map((reading, index) => (
    <Thumbnail reading={reading} key={index} />
  ));
}

export default Project;
