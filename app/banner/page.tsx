"use client";

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { BackgroundLines } from "../components/ui/background-lines";

const Banner: React.FC = () => {
  const [loopNum, setLoopNum] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [text, setText] = useState<string>("");
  const [delta, setDelta] = useState<number>(300 - Math.random() * 100);
  const [index, setIndex] = useState<number>(1);

  const toRotate: string[] = ["MERN Developer", "UI UX Designer", "AIML Enthusiar", "Space Enthusiast", "Coder"];
  const period: number = 1000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner mx-9" id="home">
        <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <Container>
        <Row className="flex flex-col md:flex-row items-center">
          {/* TEXT LEFT */}
          <Col xs={12} md={6} xl={7} className="order-2 md:order-1 mx-20">
            <TrackVisibility>
              {({ isVisible }: { isVisible: boolean }) => (
                <div className={`${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <span className="tagline text-sm text-purple-500 uppercase tracking-widest">
                    Welcome to my Portfolio
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">
                    {`Hi! I'm Shaivi `}
                    <span className="txt-rotate text-purple-400"><br />
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Exploring the universe of code, one project at a time.
                  </p>
                  <button
                    className="mt-6 inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full transition duration-300"
                    onClick={() => console.log("connect")}
                  >
                    Let’s Connect <ArrowRightCircle className="ml-2" size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
        
        {/* astronaut image that i addded initially */}
          {/* IMAGE RIGHT */}
          {/* <Col xs={12} md={6} xl={5} className="order-1 md:order-2 mx-24">
            <TrackVisibility>
              {({ isVisible }: { isVisible: boolean }) => (
                <div
                  className={`${isVisible ? "animate__animated animate__zoomIn" : ""} 
                  relative w-full h-auto`}
                >
                  <img
                    src={headerImg.src}
                    alt="Header Img"
                    className="w-full h-auto animate-float"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col> */}
        </Row>
        
      </Container>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translatey(0px);
          }
          50% {
            transform: translatey(-20px);
          }
          100% {
            transform: translatey(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
      </BackgroundLines>
    </section>
  );
};

export default Banner;