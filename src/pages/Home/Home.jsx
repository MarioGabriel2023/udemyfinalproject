import React, { useState } from "react";
import Header from "../../components/header/Header";
import ExploreCourses from "../../components/ExploreCourses/ExploreCourses";
import CourseDisplay from "../../components/CourseDisplay/CourseDisplay";

export default function Home() {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreCourses category={category} setCategory={setCategory} />
      <CourseDisplay category={category} setCategory={setCategory} />
    </div>
  );
}
