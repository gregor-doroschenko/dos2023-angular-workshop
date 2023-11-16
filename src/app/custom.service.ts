import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class CustomService {
    users: string[] = ['Gregor'];
    users$: BehaviorSubject<string[]> = new BehaviorSubject(['Gregor']);

    add(user: string) {
        this.users.push(user);
        const newUsers = [...this.users, user];
        this.users$.next(newUsers);
    }
}