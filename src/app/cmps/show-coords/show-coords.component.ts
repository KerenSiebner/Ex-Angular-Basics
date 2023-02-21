import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss']
})
export class ShowCoordsComponent implements OnInit, OnDestroy {
  x = 0
  y = 0

  ngOnInit() {
    document.addEventListener('mousemove', this.updateCoords);
  }

  updateCoords = (event: MouseEvent) => {
    this.x = event.clientX
    this.y = event.clientY
  }

  ngOnDestroy() {
    document.removeEventListener('mousemove', this.updateCoords);
  }
}
