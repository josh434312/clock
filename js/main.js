
// let hr = document.getElementById("hour")
//  let min = document.getElementById("min")
//  let sec = document.getElementById("sec")
 
  
  function updateClock(){
    let time = document.getElementById("time-clock")
    let now = new Date();

    hr = String(now.getHours()).padStart(2, "0")
  min = String(now.getMinutes()).padStart(2, "0")
  sec = String(now.getSeconds()).padStart(2, "0")

    time.innerHTML = `${hr}:${min}:${sec}`
 }
 
 setInterval(updateClock, 1000);




