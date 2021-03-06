import React from 'react'

function InputComponent(props) {
    
     /*
    This component displays the add task form and the countdown timer
    */
    
    const style = {
        height: 500
    }
    
    const counter = {
        fontSize: 45,
        border: "3px",
        borderStyle: "solid",
        borderColor: props.randColor
    }
    
    // Split the total duration property into units of time to be displayed in the countdown timer
    let hour = Math.trunc(props.totalDuration / 3600)
    let min = Math.trunc((props.totalDuration % 3600) / 60)
    let sec = props.totalDuration % 60
    let correctFormat = ""
    
    // At 60 minutes, display :00: instead or if the value for min is not a number i.e isNaN 
    if (min === 60 || isNaN(min)) {
        min = 0
    } 
    
    // Show the correct text under the timer
    if(hour === 0) {
        if (min === 0) {
        correctFormat = "Second(s)"
        } else {
            correctFormat = "Minute(s)"
        }
    } else {
        correctFormat = "Hour(s)"
    }
    
    
    return (
        <div className="" style={style}>
            <div className="col-12 py-3 px-2 mb-4" style={{backgroundColor:"#202A3B", height:"55%"}}>
                <h4 className="d-flex justify-content-center">
                    <span style={{borderBottom: "3px solid red"}}>Create Task</span> 
                </h4>
                <form className="row g-3" onSubmit={props.handleSubmit}>
                    <div className="col-12">
                        <label className="form-label">Enter your tasks for today:</label>
                        <input type="text" className="form-control" maxLength="40"
                        placeholder="Need to study for an exam?" name="task" 
                        onChange={props.handleInput} required/>
                    </div>
                    <div className="col-8">
                        <label className="form-label">
                            For how long?
                        </label>
                        <select className="form-select" name="duration" 
                        onChange={props.handleInput}
                        >
                            <option defaultValue>-- Select task duration --</option>
                            <option value="0.5">30 Minutes</option>
                            <option value="1">1 Hour</option>
                            <option value="2">2 Hours</option>
                            <option value="3">3 Hours</option>
                        </select>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-primary" 
                        type="submit" disabled={props.inputInvalid}
                        >ADD TASK
                        </button>
                    </div>
                </form>
            </div>
            <div className="col-12 py-3 px-2" style={{backgroundColor:"#202A3B", height:"45%"}}>
                <h4 className="d-flex justify-content-center">
                    <span style={{borderBottom: "3px solid red"}}>Timer</span> 
                </h4>
                <h6 className="d-flex justify-content-center">
                        The duration for all your task is:
                </h6>
                <div className="d-flex justify-content-center mb-2 mt-2">
                    <span style={counter} className="rounded-pill px-4">
                        {hour.toString().length === 1 ? "0" + hour : hour} : 
                        {min.toString().length === 1 ? "0" + min: min} : 
                        {sec.toString().length === 1 ? "0" + sec: sec}
                    </span>
                </div>
                <div className="d-flex justify-content-center">
                    <h6 className=""> 
                        { correctFormat }    
                    </h6>         
                </div>
            </div>
        </div>
    )
}

export default InputComponent

