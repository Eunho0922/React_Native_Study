import React from "react"

import GoalList from "./componenets/GoalList"
import './App.css';

function App() { 
  const courseGoals = [
    { id: "cg1", text: "Finish the Course" },
    { id: "cg2", text: "Learn all about the Course Main Topic" },
    { id: "cg3", text: "Help other students in the Course Q&A" },
  ];
    return (
      <div className='course-goals'>
        <h2>Course Goals</h2>
        {/* <ul className="goal-list">
        <li>Finish the Course</li>
        <li>Learn all about the Course Main Topic</li>
        <li>Help other students in the Course Q&A</li>
        </ul>*/ }
        <GoalList goals={courseGoals}/>
      </div>
    )
}

export default App;