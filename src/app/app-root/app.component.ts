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
    title = 'Angular Basics Excercizes';
    user: User = {
        name: 'Srulik',
        age: 34,
        isAdmin: false
    }

    pets: Pet[] = [{ name: 'Rexi', _id: 'u101' }, { name: 'Shaul', _id: 'u102' }]

    onToggleAdmin(ev: MouseEvent) {
        this.user.isAdmin = !this.user.isAdmin
        this.user.balance = 100
    }

    onAddPet() {
        // this.pets.push({ name: 'Morris', _id: 'u103' })
        // this.pets.unshift({ name: 'Morris', _id: 'u103' })
        this.pets = [{ name: 'Rexi', _id: 'u101' }, { name: 'Shaul', _id: 'u102' }, { name: 'Morris', _id: 'u103' }]
    }

    onSayHello(msg: string) {
        console.log(msg);
    }

    trackByFn(idx: number, item: any) {
        return item._id
    }


}
