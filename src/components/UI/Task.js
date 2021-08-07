import React from 'react'


function Task(props) {
    
     /*
    This component handles how each added task is displayed in TaskList.js
    */
    
    return (
        <div className="todo-item">
            <div className="container bg-white w-100 text-dark py-2 mb-2 text-wrap" style={{height:55}}>
                <div className="row">
                    <div className="col-1"><i className="bi bi-bookmark-check"></i> </div>
                    <div className="col-10">{props.item.task}
                    <small className="ps-2" style={{color: "red"}}><i>Duration: {props.item.duration} hour(s)</i></small>
                    </div>
                    <div className="col-1" 
                    style={{cursor: "pointer"}}
                    onClick={props.deleteTask}>
                        <i className="bi bi-x-square-fill" id={props.item.key}></i>
                    </div>
                </div>
                
            </div>
        
        </div>
    )
    
}

export default Task
