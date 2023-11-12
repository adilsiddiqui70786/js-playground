// Dates

let date = new Date()

console.log(date);   // 2023-11-05T10:53:03.032Z    // Unreadable format
 console.log(date.toString());
 console.log(date.toDateString());
 console.log(date.toISOString());
 console.log(date.toJSON());
 console.log(date.toLocaleDateString());
                     

 let myCreateddate = new Date(2023, 0, 23)  //Mon Jan 23 2023
 let myCreateddate2 = new Date(2023, 0, 23, 5, 3) //1/23/2023, 5:03:00 AM
 
 let myCreateddate3 = new Date("01-14-2023")  

 console.log(myCreateddate3.toLocaleString()); 


 let myTimeStamp = Date.now()
 console.log(myTimeStamp);

 console.log(myCreateddate.getTime());  //1674412200000  in mili second

 console.log(Math.floor(Date.now()/1000));

 let newDate = new Date()
 console.log(newDate.getMonth());
 
 console.log(`${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`);

 // OR

 let todayDate = new Date();

 let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 
 let dayName = daysOfWeek[todayDate.getDay()];
 
 console.log(`Today is ${dayName} and the time is ${todayDate.getHours()}:${todayDate.getMinutes()}:${todayDate.getSeconds()}`);
 

 todayDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "UTC"
 })