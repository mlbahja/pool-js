function addWeek(){
    
}
function timeTravel(){

}
addWeek(new Date('0001-01-01')) // Output: Monday
addWeek(new Date('0001-01-02')) // Output: Tuesday
addWeek(new Date('0001-01-07')) // Output: Sunday
addWeek(new Date('0001-01-08')) // Output: secondMonday
addWeek(new Date('0001-01-09')) // Output: secondTuesday

// timeTravel({ date, hour, minute, second })

timeTravel({
  date: new Date('2020-05-29 23:25:22'),
  hour: 21,
  minute: 22,
  second: 22,
}).toString()

// Output: Fri May 29 2020 21:22:22 GMT+0100 (Western European Summer Time)
