class CountdownTimer { 
    
    constructor(input) { 
        this.countdownTime = input.targetDate.getTime();
        const clockRef = document.querySelector(input.selector);
        
        this.refs = {
            days: clockRef.querySelector('[data-value="days"]'),
            hours: clockRef.querySelector('[data-value="hours"]'),
            mins: clockRef.querySelector('[data-value="mins"]'),
            secs: clockRef.querySelector('[data-value="secs"]'),
        }; 
    }

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const time = this.countdownTime - currentTime;
        
        if (time <= 0) {
            this.updateClock(0);
            clearInterval(this.intervalId);
        } else this.updateClock(time);
    }, 1000);
    
    updateClock(time) {
        const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

        function pad(value) {
            return String(value).padStart(2, '0');
        }

        this.refs.days.innerHTML = days;
        this.refs.hours.innerHTML = hours;
        this.refs.mins.innerHTML = mins;
        this.refs.secs.innerHTML = secs;
    }
}

const myTimerOne = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date('Mar 8, 2021'),
});

const myTimerTwo = new CountdownTimer({
  selector: "#timer-2",
  targetDate: new Date('Aug 8, 2021'),
});

const myTimerThree = new CountdownTimer({
  selector: "#timer-3",
  targetDate: new Date('Jul 17, 2019'),
});
