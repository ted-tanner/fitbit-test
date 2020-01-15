import clock from "clock";
import document from "document";

clock.granularity = "seconds";

const hourHand = document.getElementById("hourHand");
const hourHandOutline = document.getElementById("hourHandOutline");
const minHand = document.getElementById("minHand");
const minHandOutline = document.getElementById("minHandOutline");
const secHand = document.getElementById("secHand");


// Update the <text> element every tick with the current time
clock.ontick = () => {
  let time = new Date();
  let hours = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  
  let secondsAngle = 6 * secs;
  let minutesAngle = 6 * mins + ~~(secs / 10); //~~ Does the equivalent of Math.Floor in
  let hoursAngle = 30 * hours + 0.5 * mins;    //this case, but much more quickly

  hourHand.groupTransform.rotate.angle = hoursAngle;
  hourHandOutline.groupTransform.rotate.angle = hoursAngle;
  minHand.groupTransform.rotate.angle = minutesAngle;
  minHandOutline.groupTransform.rotate.angle = minutesAngle;
  secHand.groupTransform.rotate.angle = secondsAngle;
}
