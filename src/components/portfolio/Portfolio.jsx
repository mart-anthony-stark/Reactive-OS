import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../redux/taskSlice";
import "./style.css";

const Portfolio = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  useEffect(() => {
    const portfolioApp = document.querySelector(".portfolio");
    const portfolioHeader = document.querySelector(".portfolio-header");

    function onDrag({ movementX, movementY }) {
      const styles = window.getComputedStyle(portfolioApp);
      let left = parseInt(styles.left);
      let top = parseInt(styles.top);

      portfolioApp.style.left = `${left + movementX}px`;
      portfolioApp.style.top = `${top + movementY}px`;
    }
    portfolioHeader.addEventListener("mousedown", () => {
      portfolioHeader.addEventListener("mousemove", onDrag);
    });

    document.addEventListener("mouseup", () => {
      portfolioHeader.removeEventListener("mousemove", onDrag);
    });

    return () => {
      document.removeEventListener("mouseup", () => {
        portfolioHeader.removeEventListener("mousemove", onDrag);
      });
    };
  }, []);

  return (
    <div
      className="portfolio"
      style={{ zIndex: tasks.indexOf("portfolio") + 1 }}
    >
      <div className="app-header portfolio-header">
        <span>Mart Anthony Salazar Portfolio</span>
        <div
          className="close-btn"
          onClick={() => dispatch(removeTask("portfolio"))}
        >
          <AiFillCloseCircle />
        </div>
      </div>
      <iframe
        src="https://martanthonysalazar.tech/"
        width="100%"
        height="100%"
        allowfullscreen="allowfullscreen"
      ></iframe>
    </div>
  );
};

export default Portfolio;
