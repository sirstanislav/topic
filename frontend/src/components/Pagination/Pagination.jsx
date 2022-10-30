import "./Pagination.css";
import React from "react";
import { useDispatch } from "react-redux";
import { nextPage } from "../../store/buttonStateSlice";

export default function Pagination() {
  const dispatch = useDispatch();

  return (
    <section className="more">
      <div
        className="more__button"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Go Up
      </div>
      {/* <div
        className="more__button"
        onClick={() => {
          dispatch(nextPage(true)); //good practices send object in payload
          window.scrollTo(0, 0);
        }}
      >
        More
      </div> */}
    </section>
  );
}
