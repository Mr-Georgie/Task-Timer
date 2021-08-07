import React from 'react'
import Task from './Task'

function TaskList(props) {
    
    /*
    This component displays the all task as they are being added
    */
    
    const taskItems = props.record.map(item => 
        <Task key={item.key} item={item} deleteTask = {props.deleteTask}/>)
    
    return (
        <div className="container h-100" style={{backgroundColor:"#202A3B"}}>
            <div className="d-flex justify-content-center pt-2">
                <h4 style={{borderBottom: "3px solid red"}}>All Tasks</h4>
            </div>
            <div className="col-12 pt-3">
            
                {taskItems}
                
            </div>
            <div className="d-flex justify-content-center pt-4">
                <button className="btn btn-primary me-3" 
                    type="submit"
                    onClick={props.startTimer}
                    disabled={props.disableStartButton}
                    name="startButton">
                    START TIMER
                </button>
                <button className="btn btn-danger" 
                    type="submit"
                    onClick={props.stopTimer}
                    disabled={!props.disableStartButton}
                    name="stopButton">
                    STOP TIMER
                </button>
            </div>
            <div className="d-flex justify-content-center pt-4">
                <button className="btn btn-warning" 
                    type="submit"
                    onClick={props.clearTaskRecord}
                    disabled={props.disableStartButton}
                    name="stopButton">
                    CLEAR ALL TASK
                </button>
            </div>
        </div>
    )
}

export default TaskList
