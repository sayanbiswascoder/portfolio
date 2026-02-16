import React, { useState, useEffect, useRef } from "react";
import "./experience.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { BsPatchCheckFill } from "react-icons/bs";

const Experience = ({ getHeight }) => {
  AOS.init({
    offset: 240,
    duration: 600,
  });
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setHeight(ref.current.clientHeight);
  }, []);
  getHeight(height);
  return (
    <div ref={ref}>
      <section id="experience">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience__container">
          <div className="experience__frontend" data-aos="fade-right">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>HTML • CSS • JavaScript</h4>
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>React JS</h4>
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Next JS</h4>
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>React Native</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Flutter</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Tailwind</h4>
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
            </div>
          </div>
          <div className="experience__backend" data-aos="fade-left">
            <h3>Backend Development</h3>
            <div className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />{" "}
                <div>
                  <h4>Express JS</h4>{" "}
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Django</h4>{" "}
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Flask</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>Solidity</h4>
                  <small className="text-light">Basic</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />{" "}
                <div>
                  <h4>MongoDB</h4>{" "}
                  <small className="text-light">Experirenced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="experience__icon" />
                <div>
                  <h4>MySQL</h4>
                  <small className="text-light">Intermediate</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
