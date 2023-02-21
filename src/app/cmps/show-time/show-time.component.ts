import { Component } from '@angular/core';

@Component({
  selector: 'show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss']
})
export class ShowTimeComponent {
  time = new Date()
  isDark = false
  // season = this.getSeason()
  // imgUrl = `../../assets/img/${this.season}.png`

  get season() {
    const month = this.time.getMonth() + 1
    switch (month) {
      case 10: case 11: {
        return 'fall'
        break;
      }
      case 12: case 1: case 2: {
        return 'winter'
        break;
      }
      case 3: case 4: {
        return 'spring'
        break;
      }
      case 5: case 6: case 7: case 8: case 9: {
        return 'summer'
        break
      }
      default: {
        return 'no season'
      }
    }
  }
}
