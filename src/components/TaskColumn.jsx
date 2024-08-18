/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./TaskColumn.css";
import MiniFigure from "../assets/LEGO-Campus-Billund-Denmark.jpg"
import TaskCard from "./TaskCard";

const TaskColumn = ({columnLabel}) => {
    return (
        <section className='task_column'>
            <h2 className="task_column_heading"> 
                <img className="task_column_icon" src={MiniFigure} alt=""/>
                {columnLabel}
            </h2>
            < TaskCard />
        </section>
    )
}

export default TaskColumn