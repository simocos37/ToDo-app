// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import './TaskForm.css';
import Tag from './Tag';

const TaskForm = () => {
//     const [task, setTask] = useState('');
//     const [state, setState] = useState('todo'); // default state for a new task is 'todo'

    const [taskData, setTaskData] = useState({
        task: '', // default task is an empty string
        state: 'todo', // default state for a new task is 'todo'
        tags: []
    });

    const handleChange = (event) => {
        const {name, value} = event.target; // object destructuring is used to extract the name and value attributes of the input element

        setTaskData(previousData => {   // previousData is the current value of the state variable taskData. The function returns an object with the updated values of the state variable taskData.
            return {
                ...previousData, // the spread operator is used to copy the previousData object
                [name]: value, // the value of the name attribute of the input element is used as the key to update the value of the corresponding property in the taskData object
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent the default form submission behaviour, which would cause the page to reload when the form is submitted 
        console.log(taskData);
    }

    const checkTag = (tagName) => {
        return taskData.tags.some(item => item === tagName);
    }

    // the idea is to add or remove a tag from the taskData object when the user clicks on a tag button, he can select it or deselect it
    const selectTag = (tagName) => {
        console.log('tag selected is: ', tagName)
        if (taskData.tags.some(item => item === tagName)) {
            const filteredTags = taskData.tags.filter(item => item !== tagName); // remove the tag from the array if it already exists
            setTaskData(previousData => {
                return {
                    ...previousData,
                    tags: filteredTags,
                }
            })
        } else {
            setTaskData(previousData => {
                return {
                    ...previousData, // copy the previousData object
                    tags: [...previousData.tags, tagName] // add the selected tag to the array of exisitng tags
                }
            })
        }
    }

    console.log(taskData);

    return (
        <header className='app_header'>
            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    name='task'
                    className='task_input' 
                    placeholder='Enter your task'
                    onChange={handleChange}    
                />
                <div className='task_form_bottom_line'>
                    <div>
                        <Tag tagName="HTML" selectTag={selectTag} selected={checkTag("HTML")}/>
                        <Tag tagName="CSS" selectTag={selectTag} selected={checkTag("CSS")}/>
                        <Tag tagName="JavaScript" selectTag={selectTag} selected={checkTag("JavaScript")}/>
                        <Tag tagName="React" selectTag={selectTag} selected={checkTag("React")}/>
                    </div>

                    <div>
                        <select className='task_status' name='state' onChange={handleChange}>
                            <option value='todo'>To Do</option>
                            <option value='doing'>Doing</option>
                            <option value='done'>Done</option>
                        </select>
                        <button type='submit' className='task_submit'>+ Add Task</button>
                    </div>
                </div>
            </form>
        </header>
    )
}

export default TaskForm