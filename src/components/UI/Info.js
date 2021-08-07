import React from 'react'

function Info() {
    
     /*
    This component displays information about the app and author
    */
    
    return (
        <div className="">
            <div className="d-flex justify-content-center">
                <h4 style={{borderBottom: "3px solid red"}}>Steps:</h4>
                <hr className="bg-primary" style={{width:5}}/>
            </div>
            <div className="">
                <ol>
                    <li>Enter each tasks for today using the form at the top left. </li>
                    <li>Specify the duration of each task with the form. Then, click the button to add task</li>
                    <li>When all you've added all your task for today, click the start timer button to begin. </li>
        
                </ol>
                <ul>
                    <li>Note: You can only add up to 5 task at a time. </li>
                    <li>Please report any issue ASAP to the developer.</li>
                    <li>Twitter: @GeorgeIsiguzo</li>
                    <li>Mail: George.isiguzo@yahoo.com</li>
                    <li>Blog: Footprints.hashnode.dev</li>
                </ul>
            </div>
        </div>
    )
}

export default Info
