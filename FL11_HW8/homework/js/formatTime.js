const formatTime = numberMinutes => {
  let minutes = numberMinutes % 60;
  let hour = Math.floor(numberMinutes / 60) % 24;
  let day = Math.floor(numberMinutes / 1440);
  
  return day + " day(s) " + hour + " hour(s) " + minutes + " minute(s) ";
};

formatTime(3601);
