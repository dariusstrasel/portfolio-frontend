import React from "react";
import Skills from "../skills/skills";
import Testimonials from "../Testimonials/Testimonial";

const AboutMe: React.FC = () => {
  return (
    <main>
      <section className="parent skills">
        <header>
          <h2>About Me</h2>
        </header>
        <div className="container">
          <div className="row flex">
            <div className="block child">
              <h2>
                <span className="highlight">Darius Strasel</span> is a Rhode
                Island-based Software Engineer, technology-enthusiast, and
                Photographer.{" "}
              </h2>
            </div>
          </div>
          <div className="row flex">
            <div className="block child align-center">
              <p>
                His approach to development focuses on learning the intricacies
                of both front and backend development, with a background that
                tends to lean towards backend development, databases &
                analytics, and infrastructure/ systems automation/tooling. He
                has a keen appreciation for well-created interface design, and
                regularly works in the front-end as well.
              </p>
            </div>
          </div>
          <Skills />
        </div>
      </section>
      <Testimonials />
    </main>
  );
};

export default AboutMe;
