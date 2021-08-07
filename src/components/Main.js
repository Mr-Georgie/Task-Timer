import React from 'react'
import InputComponent from './subcomponents/InputComponent'
import TaskList from './subcomponents/TaskList'
import Info from './Info'

function Main(props) {
    
    /*
    This component serve as the layout for the app. Sets the height and color for the app
    */
    
    const style = {
        height: 520, 
        backgroundColor: '',
        overflow: 'hidden'
    }
    
    const box = {
        // width: 250, 
        backgroundColor: '',
        color: "white"
    }
    
    // console.log(props)
    
    return (
        <div className="container main">
            <div className="row" style={style}>
                <div className="col-4" style={box}>
                    <InputComponent 
                    eachTask = {props.eachTask}
                    handleInput = {props.handleInput}
                    handleSubmit = {props.handleSubmit}
                    record={props.record}
                    totalDuration = {props.totalDuration}
                    inputInvalid = {props.inputInvalid}
                    timeTaken = {props.timeTaken}
                    disableStartButton = {props.disableStartButton}
                    />
                </div>
                <div className="col-5" style={box}>
                    <TaskList 
                    record={props.record}
                    disableStartButton = {props.disableStartButton}
                    startTimer = {props.startTimer}
                    stopTimer = {props.stopTimer}
                    clearTaskRecord = {props.clearTaskRecord}
                    deleteTask = {props.deleteTask}
                    />
                </div>
                <div className="col-3" style={box}>
                    <Info />
                </div>
            </div>
        </div>
    )
}

export default Main

