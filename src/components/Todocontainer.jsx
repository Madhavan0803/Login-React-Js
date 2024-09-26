import Todoform from "./TodoForm"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer(){

    const [activityArr,setactivityArr] = useState([ 
        {
            id:1,
            activity:"Go for a Walk"
        },
        {
            id:2,
            activity:"Have Breakfast"
        },
        {
            id:3,
            activity:"Take Shower"
        }
    ])

    return(
        <div>
            <div className="flex gap-5 flex-wrap">
       <Todoform activityArr = {activityArr} setactivityArr = {setactivityArr}/>
       <Todolist activityArr = {activityArr} setactivityArr = {setactivityArr}/>
        </div>
        </div>
    )       
}
export default Todocontainer