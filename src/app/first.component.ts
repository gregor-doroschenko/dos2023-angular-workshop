import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { CustomService } from "./custom.service";

@Component({
    standalone: true,
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
    imports: [NgIf, NgFor]
})
export class FirstComponent {
    @Input() buttonTitle: string = "Button Title";
    @Output() outputEvent = new EventEmitter<string>();
    buttonDisabled = true;

    users = ['Gregro', 'Anne', 'Torsten'];

    // Injector way: Service Nutzung
    customService = inject(CustomService);

    changeButtonState() {
        this.buttonDisabled = !this.buttonDisabled;
    }

    readMouseOverEvent(mouseOverEvent: any) {
        console.log(mouseOverEvent);
        this.outputEvent.emit('MouseOver getriggert');
    }

    addUser(user: string) {
        this.customService.add(user);
    }
}