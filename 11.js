let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 0;
let secs = 0;
let mins = 0;

let timerId = null;

startBtn.addEventListener('click',function(){
	if(timerId !== null){
		clearInterval(timerId);
	}
	timerId = setInterval(startTimer, 10);
});
stopBtn.addEventListener('click',function(){
	clearInterval(timerId);
});
resetBtn.addEventListener('click',function(){
	clearInterval(timerId);
	timerDisplay.innerHTML = `00 : 00 : 00`;
	msec = secs = mins = 0;
});

function startTimer(){
	msec++;
	if(msec == 60){
		msec = 0;
		secs++;
		if(secs == 60){
			secs = 0;
			mins++;
		}
	}
     
	let msecString = msec < 10 ? `${msec}`: msec;
	let secsString = msec < 10 ? `${secs}`: secs;
	let minsString = msec < 10 ? `${mins}`: mins;

    timerDisplay.innerHTML = `${minsString} : ${secsString} :${msecString} `;
}