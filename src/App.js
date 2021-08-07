import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
// import BottomBar from './BottomBar'

export class App extends Component {
    
    /*
    This component holds most of the logic of the app.
    Leveraging React's Class State and Methods. 
    */
    
    constructor(props) {
        super(props)
    
        this.state = {
            record: [],
            eachTask: {
                duration: 0,
                task: "",
                key: ""
            },
            totalDuration: 0,
            timeTaken: 0,
            inputInvalid: true,
            disableStartButton: true,
            count: 0,
            intervalID: 0  
        }
    }
    
    // Ensure task description is not too long
    validateTask = (task) => {
        if (task.length > 39) {
            alert("Task description too long")
        }
    }
    
    // Ensure a valid task duration option is picked
    validateDuration = (duration) => {
        if (duration !== '-- Select task duration --') {
            this.setState({ inputInvalid: false})
        } else {
            this.setState({ inputInvalid: true})
            console.log("Please select a valid task duration")
        }
    }   
    
    // Set the background color and font
    componentDidMount = () => {
        document.body.style.backgroundColor = "#17202D"
        // 17202D or 303F51 or 202A3B
        document.body.style.fontFamily = "'Balsamiq Sans', cursive"
    }
    
    // Calculate the total task duration when ever a new task is added to record
    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.record !== this.state.record) {
            let totalDuration = 0
            let inSeconds = 0
            let timeTaken = 0
        
            this.state.record.forEach((task) => {
                timeTaken = timeTaken + parseFloat(task.duration)
                inSeconds = parseFloat(task.duration) * 3600
                totalDuration = totalDuration + inSeconds
                
            })
            // timetaken is the total duration in hours
            // totalDuration is the total duration in seconds
            this.setState({ totalDuration, timeTaken });
        
            // console.log(preventAddTask)
        }
    }
    
    // Event handler for every time the user fills the form
    handleInput = (event) => {
        
        const eachTask = {...this.state.eachTask}
        
        if (event.target.name === 'duration') {
            this.validateDuration(event.target.value)
            
            eachTask.duration = event.target.value
        } else if (event.target.name === 'task') {
            this.validateTask(event.target.value)
            
            eachTask.task = event.target.value
        }
        
        eachTask.key = Date.now()
        
        this.setState({ eachTask })
    }
    
    // Event handler for every time the user submits the form
    handleSubmit = (event) => {
        event.preventDefault()
        
        const eachTask = {...this.state.eachTask}
        const record = [...this.state.record, eachTask ]
        const disableStartButton = false
                
        this.setState({ record, disableStartButton })
        
    } 
    
    // To start countdown timer
    startTimer = () => {
        
        let countDown = this.state.totalDuration
        const disableStartButton = true
            
        let intervalID = setInterval(() => {
            this.setState(prevState => {
                return {
                    count: prevState.count + 1,
                    totalDuration: countDown - prevState.count,
                    disableStartButton,
                    intervalID: intervalID
                }
            })
        }, 1000) 
        
        // console.log(disableStartButton)
    }
    
    // To stop timer
    stopTimer = () => {
        
        clearInterval(this.state.intervalID)
        console.log("Timer stopped")
        console.log(this.state.intervalID)
        
        // const eachTask = {...this.state.eachTask}
        const record = [...this.state.record]
        const disableStartButton = false
        
        this.setState({ record, disableStartButton })
        // console.log(record)
        
        // console.log(disableStartButton)
    }
    
    // To delete all tasks in record
    clearTaskRecord = () => {
        this.setState({
            record: [],
            eachTask: {
                duration: 0,
                task: "",
                key: ""
            },
            totalDuration: 0,
            timeTaken: 0,
            inputInvalid: true,
            disableStartButton: true,
            count: 0,
            intervalID: 0
        })
        
        console.log("cleared")
    }
    
    // To delete a single task from record
    deleteTask = (event) => {
        if (this.state.disableStartButton) {
            alert(
                "Please stop timer to do this"
            )
        } else {
            this.setState(prevState => {
                return {
                    record: prevState.record.filter(task => task.key !== parseInt(event.target.id))
                }
            })
        }
        
        
    }

    
    render() {
        return (
            <div>
                <Navbar />
                
                {/* Pass every class state and method as props for Main Component */}
                <Main 
                handleInput = {this.handleInput}
                startTimer = {this.startTimer}
                handleSubmit={this.handleSubmit}
                stopTimer = {this.stopTimer}
                clearTaskRecord = {this.clearTaskRecord}
                deleteTask = {this.deleteTask}
                
                eachTask = {this.state.eachTask}
                record = {this.state.record}
                totalDuration = {this.state.totalDuration}
                inputInvalid = {this.state.inputInvalid}
                disableStartButton = {this.state.disableStartButton}
                timeTaken = {this.state.timeTaken}
                />
            </div>
        )
    }
}

export default App
