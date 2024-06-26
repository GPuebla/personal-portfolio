import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import skill1 from "../assets/img/skill-innovative.svg";
import skill2 from "../assets/img/skill-multilingual.svg";
import skill3 from "../assets/img/skill-team-player.svg";
import skill4 from "../assets/img/skill-goal-oriented.svg";
import skill5 from "../assets/img/skill-fast-learner.svg";
import skill6 from "../assets/img/skill-multitasker.svg";
import skill7 from "../assets/img/skill-problem-solver.svg";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>These skills define me as a professional and greatly influence my performance in facing different challenges.<br></br> I invite you to check them out, and if you want to learn more, feel free to contact me.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                            <img src={skill1} alt="Image" />
                                <h5>Innovative</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>Multilingual</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Team Player</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h5>Goal Oriented</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                                <h5>Fast Learner</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Image" />
                                <h5>Multitasker</h5>
                            </div>
                            <div className="item">
                                <img src={skill7} alt="Image" />
                                <h5>Problem Solver.</h5>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
