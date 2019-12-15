import React from "react";
import Skills from "../skills/skills";
import Testimonials from "../Testimonials/Testimonial";

const Main: React.FC = () => {
    return (
        <div>
            <nav className="nav-off-canvas">
                <ul>
                    <li className="nav-item"><a href="#"><i className="entypo-user"></i> About</a></li>
                    <li className="nav-item"><a href="#"><i className="entypo-pencil"></i> Blog</a></li>
                    <li className="nav-item"><a href="#"><i className="entypo-code"></i> Software</a></li>
                    <li className="nav-item"><a href="#"><i className="entypo-camera"></i> Photography</a></li>
                </ul>
            </nav>
            <input type="checkbox" id="nav-trigger" className="nav-trigger"/>
            <div className="wrapper">
                <header className="bar flex">
                    <div className="child">
                        <img className="clip-circle" src="../images/me.jpg" id="myFace"
                             alt="Portrait of Web Developer Darius Strasel"></img>
                        <div className="parent">
                            <h1 className="myName">Darius Strasel</h1>
                            <p>Software / Web Developer</p>
                        </div>
                    </div>
                    <nav className="top child">
                        <ul className="flex flex-end">
                            <li className="active"><a href="#"><i className="entypo-user"></i> About</a></li>
                            <li><a href="#"><i className="entypo-pencil"></i> Blog</a></li>
                            <li><a href="#"><i className="entypo-code"></i> Software</a></li>
                            <li><a href="#"><i className="entypo-camera"></i> Photos</a></li>
                        </ul>
                    </nav>
                    <ul className="flex social-media">
                        <li>
                            <a href="https://github.com/dariusstrasel" title="Github">
                                <span className="entypo-github icon icon-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dariusstrasel" title="LinkedIn">
                                <span className="entypo-linkedin icon icon-linkedin"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/dariusstrasel" title="Twitter">
                                <span className="entypo-twitter icon icon-twitter"></span>
                            </a>
                        </li>
                    </ul>
                    <label htmlFor="nav-trigger"></label>
                </header>
                <main>
                    <section className="parent skills">
                        <header>
                            <h2>About Me</h2>
                        </header>
                        <div className="container">
                            <div className="row flex">
                                <div className="block child">
                                    <h2><span className="highlight">Darius Strasel</span> is a Rhode Island-based
                                        Software Engineer, technology-enthusiast, and Photographer. </h2>
                                </div>
                            </div>
                            <div className="row flex">
                                <div className="block child align-center">
                                    <p>His approach to development focuses on learning the intricacies of both front and
                                        backend development, with a background that tends to lean towards backend
                                        development, databases & analytics, and infrastructure/ systems
                                        automation/tooling.
                                        He has a keen appreciation for well-created interface design, and regularly
                                        works in the front-end as well.</p>
                                </div>
                            </div>
                            <Skills/>
                        </div>
                    </section>
                    <Testimonials/>
                </main>
                <footer className="flex space-around footer navbar-fixed-bottom">
                    <small className="child">Copyright <a href="mailto:strasel.darius@gmail.com">Darius Strasel</a> 2017</small>
                    <ul className="flex social-media bottom">
                        <li>
                            <a href="https://github.com/dariusstrasel" title="Github">
                                <span className="entypo-github icon icon-github"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/dariusstrasel" title="LinkedIn">
                                <span className="entypo-linkedin icon icon-linkedin"></span>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/dariusstrasel" title="Twitter">
                                <span className="entypo-twitter icon icon-twitter"></span>
                            </a>
                        </li>
                    </ul>
                    <a href="#" title="Resume" className="social-media bottom">
                        <span className="entypo-doc-text icon icon-resume"></span>
                    </a>
                </footer>
            </div>
            <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossOrigin="anonymous"></script>
            <script type="text/javascript" src="../js/main.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossOrigin="anonymous"></script>
        </div>
    )
};

export default Main;