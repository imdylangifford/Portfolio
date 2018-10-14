import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="contactcontainer">
        <div className="contactleft">
          <h1>get</h1>
          <h1>in</h1>
          <h1>touch</h1>
          <h1> → </h1>
        </div>
        <div className="contactright">
          <div className="contactinfo">
            <p>
              <a href="mailto:imdylangifford@gmail.com" target="_top">
                by email
              </a>
            </p>
            <p>
              <a href="">on github</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/dylan-gifford-994a65149/">
                on linkedin
              </a>
            </p>
            <p>
              <a href="">on instagram</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
