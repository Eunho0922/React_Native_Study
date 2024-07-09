import React, { useState } from "react"

import GoalList from "./componenets/GoalList/GoalList"
import NewGoal from "./componenets/NewGoal/NewGoal";
import './App.css';  

function App() { 
  const [courseGoals, setCourseGoals] =  useState([
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ]);

  const addNewGoalsHandler = (newGoal) => {
    setCourseGoals(courseGoals.concat(newGoal));

    // setCourseGoals([...courseGoals, newGoal])

    // setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
    // setCourseGoals((prevCourseGoals) => [...prevCourseGoals, newGoal])
  }
    return (
      <div className='course-goals'>
        <h2>Course Goals</h2>
        <NewGoal onAddGoal={addNewGoalsHandler}/>
        <GoalList goals={courseGoals} />
      </div>
    )
}

export default App;