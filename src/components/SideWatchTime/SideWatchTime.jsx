import React, { useEffect, useState } from "react";

const SideWatchTime = ({ newWTime }) => {
  const [time, setTime] = useState(newWTime);
  useEffect(() => {
    const getWatchTime = localStorage.getItem("watch-time");
    setTime(getWatchTime);
  }, [newWTime]);
  return (
    <>
      <h5>Total Watch Time</h5>
      <input type="text" className="form-control" value={time} />
    </>
  );
};

export default SideWatchTime;
