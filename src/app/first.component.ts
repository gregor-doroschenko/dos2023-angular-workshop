import { NgFor, NgIf } from "@angular/common";
import { Component, EventEmitter, Input, Output, ViewEncapsulation, inject } from "@angular/core";
import { CustomService } from "./custom.service";

function transformSize(value: number | undefined): string {
    return `${value}px`;
}

@Component({
    standalone: true,
    selector: 'app-first, [appFirst]:not(button)',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.scss'],
    imports: [NgIf, NgFor],
    host: {
        'role': 'select',
        '[attr.aria-size]': 'size',
        '(mouseleave)': 'changeButtonState()'
    }
})
export class FirstComponent {
    @Input({ required: true, alias: 'title'}) buttonTitle: string = "Button Title";
    @Input({ transform: transformSize }) size: number = 10;


    @Input()
    get name(): string {
        return this._internalName;
    }
    set name(value: string) {
        this._internalName = value;
    }
    private _internalName!: string;

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