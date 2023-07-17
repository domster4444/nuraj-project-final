import HeroIllustrator from "../../images/landing.png";
import Button from "../Button/Button";

import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div class='hero-section'>
        <div class='division'>
          <h1 style={{ fontSize: "10rem" }}>
            Generate Your Desired CV
            <p>Here your can generate your desired CV in just few clicks.</p>
            <br />
            <Link to='/cv-page'>
              <Button name='Generate CV' bg='black'></Button>
            </Link>
          </h1>
        </div>
        <div class='division'>
          <img src={HeroIllustrator} alt='' />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
