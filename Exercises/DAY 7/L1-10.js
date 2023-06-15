//Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(totalDistance,timeTaken){
    let speedOfVechicle=totalDistance/timeTaken
    return speedOfVechicle
  }
  console.log('speed in km/hr: ', speed(250,3))