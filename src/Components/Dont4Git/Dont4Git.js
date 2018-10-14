import React from "react";
import "./Dont4Git.css";

export default function Dont() {
  return (
    <div className="dontcontainer">
      <div className="dontleft">
        <h1 className="donttitle">Dont4Git</h1>
        <p className="donttitle">
          <a href="">check the code</a>
        </p>
      </div>
      <div className="dontright">
        <p>
          Lorem ipsum dolor sit amet, `consectetur adipisicing elit. Non ullam
          mollitia earum blanditiis quia temporibus maxime provident, quasi
          necessitatibus optio corrupti quaerat, eveniet incidunt ratione,
          labore assumenda inventore rerum amet!
        </p>
        <img
          className="dontimg"
          src="https://i.postimg.cc/0QQjvxKW/Screen-Shot-2018-10-12-at-11-07-19-AM.png"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
          magnam eius accusantium veritatis et ipsum id nobis ducimus fugiat
          libero dignissimos officia modi corporis, maiores corrupti?
          Reprehenderit tempora aut iure?
        </p>
      </div>
    </div>
  );
}
