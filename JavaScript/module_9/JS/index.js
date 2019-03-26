"use strict";

let parentA = document.querySelector(".parentA");

class Stopwatch {
  constructor(parent) {
    this.parent = parent;
    this.wrap = document.createElement("div");
    this.time = document.createElement("p");
    this.smTime = document.createElement("p");
    this.btnStart = document.createElement("button");
    this.btnLoop = document.createElement("button");
    this.btnStop = document.createElement("button");
    this.lapsList = document.createElement("ul");
    this.isActive = false;
    this.startTime;
    this.timerId;
    this.deltaTime;
    this.lapsArr = [];
    this.createStopwatch = this.createStopwatch.bind(this);
    this.start = this.start.bind(this);
    this.lap = this.lap.bind(this);
    this.stop = this.stop.bind(this);
    this.calculateTime = this.calculateTime.bind(this);
    this.updateClockface = this.updateClockface.bind(this);
    this.getFormattedTime = this.getFormattedTime.bind(this);
    window.addEventListener("DOMContentLoaded", this.createStopwatch);
  }

  createStopwatch() {
    this.wrap.classList.add("wrapper");
    this.time.classList.add("time");
    this.smTime.classList.add("sm-time");
    this.lapsList.classList.add("laps-list");
    this.btnStart.classList.add("js-start");
    this.btnStart.classList.add("btn");
    this.btnLoop.classList.add("js-take-lap");
    this.btnLoop.classList.add("btn");
    this.btnLoop.setAttribute("disabled", "disabled");
    this.btnStop.classList.add("js-reset");
    this.btnStop.setAttribute("disabled", "disabled");
    this.btnStop.classList.add("btn");
    this.time.textContent = "00:00:0";
    this.smTime.textContent = "000";
    this.btnStart.textContent = "start";
    this.btnLoop.textContent = "lap";
    this.btnStop.textContent = "reset";
    this.parent.append(this.wrap, this.btnStart, this.btnLoop, this.btnStop);
    this.wrap.append(this.time, this.smTime, this.lapsList);
    this.btnStart.addEventListener("click", this.start);
    this.btnStop.addEventListener("click", this.stop);
    this.btnLoop.addEventListener("click", this.lap);
  }

  start() {
    if (this.isActive === false && this.startTime === undefined) {
      this.startTime = Date.now();
      this.isActive = true;
      this.timerId = setInterval(this.calculateTime, 100);
      this.btnStart.textContent = "pause";
      this.btnStop.removeAttribute("disabled", "disabled");
      this.btnLoop.removeAttribute("disabled", "disabled");
    } else if (this.isActive === false && this.startTime !== isNaN) {
      this.startTime = Date.now() - this.deltaTime; 
      this.isActive = true;
      this.timerId = setInterval(this.calculateTime, 100);
      this.btnStart.textContent = "pause";
    } else {
      this.isActive = false;
      this.btnStart.textContent = "continue";
      clearInterval(this.timerId);
    }
  }

  stop() {
    clearInterval(this.timerId);
    this.time.textContent = "00:00:0";
    this.smTime.textContent = "000";
    this.startTime = undefined;
    this.btnStart.textContent = "start";
    this.btnStop.setAttribute("disabled", "disabled");
    this.btnLoop.setAttribute("disabled", "disabled");
    this.lapsList.innerHTML = "";
    this.isActive = false;
  }

  lap() {
    if (this.startTime !== isNaN) {
      this.lapsArr.push(`${this.time.textContent}`);
      let laps = document.createElement("li");
      laps.classList.add("laps");
      laps.textContent = `${this.time.textContent}`;
      this.lapsList.append(laps);
    }
  }

  calculateTime() {
    this.deltaTime = Date.now() - this.startTime;
    this.updateClockface(this.time, this.deltaTime);
  }

  updateClockface(elem, time) {
    elem.textContent = this.getFormattedTime(time);
  }

  getFormattedTime() {
    let ms = Math.floor(Math.floor(this.deltaTime % 1000) / 100);
    let sec = Math.floor((this.deltaTime / 1000) % 60);
    let min = Math.floor((this.deltaTime / 1000 / 60) % 60);
    if (Math.floor(Date.now() % 1000) <= 10) {
      this.smTime.textContent = `00${Math.floor(Date.now() % 1000)}`;
    } else if (
      Math.floor(Date.now() % 1000) > 10 &&
      Math.floor(Date.now() % 1000) <= 100
    ) {
      this.smTime.textContent = `0${Math.floor(Date.now() % 1000)}`;
    } else {
      this.smTime.textContent = Math.floor(Date.now() % 1000);
    }
    return `${min >= 10 ? min : "0" + min}:${
      sec >= 10 ? sec : "0" + sec
    }:${ms}`;
  }
}

let sw1 = new Stopwatch(parentA);
// let sw2 = new Stopwatch(parentB);
