import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "./Homepage.css";

function Homepage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 });

  const boxRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);

      if (boxRef.current) {
        const boxWidth = boxRef.current.offsetWidth;
        const boxHeight = boxRef.current.offsetHeight;
        setInitialPosition({
          x: (window.innerWidth - boxWidth) / 2,
          y: (window.innerHeight - boxHeight) / 2,
        });
      }
    };

    // Initial setup and measurement
    handleResize();

    // Listen for resize events to adjust position dynamically
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="HomePageHolder">
      <motion.div
        ref={boxRef}
        className="DraggableBox"
        drag
        dragConstraints={{
          top: -initialPosition.y,
          left: -initialPosition.x,
          right: initialPosition.x,
          bottom: initialPosition.y,
        }}
        style={{
          top: initialPosition.y,
          left: initialPosition.x,
        }}
      >
        <div className="HomePageHeader animate__animated animate__pulse">
          <div className="MakerName">
            <p>
              Made<span>&lt;for&gt;</span>students
            </p>
            <p>
              From<span>&lt;two&gt;</span>students
            </p>
          </div>
          <div className="MakerName2">
            <p>
              <span>&lt;Tsewang&gt;</span>
            </p>
            <p>
              <span>&lt;Norsang&gt;</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Homepage;
