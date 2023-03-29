import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
const SideWatchTime = ({ newWTime }) => {
  const [time, setTime] = useState(newWTime);
  const [breakTime, setBreakTime] = useState(null);
// console.log(breakTime);
  const handleBreakTime =(time)=>{
    localStorage.setItem("break-time", time)
    setBreakTime(time);
  }
  const handleComplete=()=>{
    toast("Wow I Saw Full Movie!!");
  }
  useEffect(() => {
    const getWatchTime = localStorage.getItem("watch-time");
    setTime(getWatchTime);
    const breakTime = localStorage.getItem("break-time");
    if(breakTime){
      setBreakTime(breakTime);
    }
    else{
      setBreakTime(0);
    }
  }, [newWTime]);
  return (
    <>
      <h5>Total Watch Time</h5>
      <input type="text" className="form-control my-3" value={time} />
      <div className="d-grid gap-2 d-md-flex justify-content-start">
        <button onClick={()=>handleBreakTime(15)} className="btn btn-primary" type="button">15</button>
        <button onClick={()=>handleBreakTime(30)} className="btn btn-primary" type="button">30</button>
        <button onClick={()=>handleBreakTime(45)} className="btn btn-primary" type="button">45</button>
      </div>
      <input type="text" className="form-control my-3" value={breakTime} />
      <button onClick={handleComplete} className="btn btn-primary" type="button">Complete</button>
    </>
  );
};

export default SideWatchTime;
