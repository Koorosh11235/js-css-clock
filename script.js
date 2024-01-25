function time_function() {
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const time = new Date();
    var day =weekday[time.getDay()];
    var clock = String(time.getHours()) + ":" + String(time.getMinutes())+":"+String(time.getSeconds());
    var date = String(String(time.getMonth()+1)+ "/" + String(time.getDate())+"/"+time.getFullYear());
    var tz = time.getTimezoneOffset()

    const display_clock = document.getElementById("clock");
    const display_date = document.getElementById("Date");
    const display_day = document.getElementById("Day");
    const display_tz = document.getElementById("tz")
    console.log(display_tz);
    display_clock.textContent = clock;   
    display_day.textContent = day;
    display_date.textContent = date;
    display_tz.textContent = "UTC "+String(tz/60)

    var utcclock = String(time.getUTCHours()) + ":" + String(time.getUTCMinutes())+":"+String(time.getUTCSeconds());
    var utctz = "Utc Time"
    const display_clock_UTC = document.getElementById("utcclock");
    const display_tz_UTC = document.getElementById("utctz");
    display_tz_UTC.textContent = utcclock
    display_clock_UTC.textContent = utctz
}

setInterval(time_function, 1000);
time_function();
