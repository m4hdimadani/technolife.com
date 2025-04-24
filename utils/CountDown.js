import { useEffect, useState } from "react";

function CountDown({ props }) {
  const [time, setTime] = useState(props);

  useEffect(() => {
    setTimeout(() => {
      setTime(time - 1000);
    }, 1000);
  }, [time]);

  const getFormattedTime = (millisecond) => {
    let total_seconds = parseInt(Math.floor(millisecond / 1000));
    let total_minutes = parseInt(Math.floor(total_seconds / 60));
    let total_hours = parseInt(Math.floor(total_minutes / 60));

    let second = parseInt(total_seconds % 60);
    let minutes = parseInt(total_minutes % 60);
    let hours = parseInt(total_hours % 24);

    return `${hours}:${minutes}:${second}`;
  };

  return (
    <div>
      <div className="text-red-700">{getFormattedTime(time)}</div>
      <div></div>
    </div>
  );
}

export default CountDown;
