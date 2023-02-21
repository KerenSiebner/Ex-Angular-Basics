import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit, OnDestroy {

  @Input() time: number = 90000
  @Output() timeEnd = new EventEmitter()
  intervalId!: number
  isLastSeconds = false

  ngOnInit() {
    this.startCountdown()
  }

  startCountdown() {
    this.intervalId = window.setInterval(() => {
      this.time -= 1000;
      if (this.time <= 0) {
        this.stopCountdown()
        this.timeEnd.emit()
      }
      if (this.time <= 10000) {
        this.isLastSeconds = true
      }
    }, 1000)
  }

  stopCountdown() {
    clearInterval(this.intervalId)
    this.isLastSeconds = false
  }

  ngOnDestroy() {
    this.stopCountdown()
  }

}
