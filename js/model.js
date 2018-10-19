/*
Digital Clock

1. Write Corrent Time
2. Write Epoch
3. Write the time if LOG button clicked.
4. Set interval.
5. Stop Interval

*/ 


let isAmPmCalculation = false;


function findDate(){

    let  session = "";

    let date = new Date();
    let h = date.getHours(); 
    let m = date.getMinutes();
    let s = date.getSeconds();
    let ms = date.getMilliseconds() 

    
    if(isAmPmCalculation){
		h > 12? session = "PM" : session = "AM";
		h = h % 12;
	}
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    ms = (ms< 10) ? "0" + ms : ms;    
    let time = h + ":" + m + ":" + s +  ":" + ms + " " + session;

    return time;
}
