import React from "react";
import "./ExploreCourses.css";
import { menu_List } from "../../assets/assets";

const ExploreCourses = ({ category, setCategory }) => {
  return (
    <div className="explore-courses" id="explore-courses">
      <h1>Explorează cursurile noastre</h1>
      <p className="explore-courses-text">
        Udemy este una dintre cele mai mari platforme online de învățare și instruire, oferind acces la mii de cursuri
        pe o varietate largă de subiecte. Udemy oferă o platformă accesibilă și flexibilă pentru învățarea continuă și
        dezvoltarea personală sau profesională, cu o gamă largă de cursuri disponibile.
      </p>
      <div className="explore-menu-list">
        {menu_List.map((item, index) => {
          return (
            <div
              onClick={() => {
                console.log("Categorie selectată:", item.menu_name);
                setCategory((prev) => (prev === item.menu_name ? "All" : item.menu_name));
              }}
              key={index}
              className="explore-menu-list-item"
            >
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreCourses;
