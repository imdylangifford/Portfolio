import React from "react";
import "./Doro.css";

export default function Doro() {
  return (
    <div className="dorocontainer">
      <div className="doroleft">
        <h1 className="dorotitle">Doro</h1>
        <p className="dorotitle">
          <a target="_blank" href="https://github.com/imdylangifford/Doro">
            check the code
          </a>
        </p>
        <p className="dorotitle">
          <a href="https://doro.surge.sh" target="_blank">
            live example
          </a>
        </p>
      </div>
      <div className="dororight">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sint
          nihil nemo amet, aliquam ut nobis sapiente eveniet iusto harum sit
          facilis sed accusantium cupiditate perferendis explicabo quisquam
          recusandae veritatis!
        </p>
        <img
          className="doroimg"
          src="https://i.postimg.cc/kM2NFPYv/Screen-Shot-2018-10-12-at-11-07-37-AM.png"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero,
          explicabo nostrum architecto sequi officia soluta repudiandae, illum
          earum sit, fugiat perspiciatis iusto vitae non cupiditate velit?
          Accusantium aliquam consectetur nisi.
        </p>
      </div>
    </div>
  );
}
