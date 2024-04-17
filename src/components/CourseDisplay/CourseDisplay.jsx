import React, { useContext } from "react";
import "./CourseDisplay.css";
import { StoreContext } from "../context/StoreContext";
import CourseItem from "../CourseItem/CourseItem";

export default function CourseDisplay({ category }) {
  const { courses_list } = useContext(StoreContext);

  return (
    <div className="course-display" id="course-display">
      <h2>Alegerea noastră cea mai bună pentru tine</h2>
      <div className="course-display-list">
        {courses_list.map((item, index) => {
          console.log("Categorie selectată:", category);
          console.log("Categorie element:", item.category);
          if (category === "All" || category === item.category) {
            return (
              <CourseItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
