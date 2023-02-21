import { Component } from '@angular/core';
import { Pet } from '../models/pet.model';
import { User } from '../models/user.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    // template: `<div>hi</div>`,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular Basics Exercise'
    dueFunc() {
        const finishSound = new Audio('../../assets/audio/count-finish.mp3')
        finishSound.play()
    }
}
