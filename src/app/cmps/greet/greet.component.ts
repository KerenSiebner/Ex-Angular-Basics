import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
    selector: 'greet',
    templateUrl: './greet.component.html',
    styleUrls: ['./greet.component.scss'],
})
export class GreetComponent implements OnInit, OnDestroy {


    @Input() user!: User
    @Output() hello = new EventEmitter<string>()
    @Output() danger = new EventEmitter<string>()

    date = new Date()

    async ngOnInit(): Promise<void> {
        console.log('greeet')
    }

    sayHello(ev:MouseEvent) {
        this.hello.emit('Hello From Greet!')
    }


    ngOnDestroy() {

    }
}
