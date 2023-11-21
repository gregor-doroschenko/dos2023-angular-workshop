import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first.component';
import { CustomService } from './custom.service';
import { Observable } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProfileComponent } from './profile/profile.component';
import { StarwarsPeopleComponent } from './starwars-people/starwars-people.component';
import { NestedFormComponent } from './nested-form/nested-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatSidenavModule, FirstComponent, ProfileComponent, StarwarsPeopleComponent, NestedFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'devopenspace2023';
  date = new Date();
  newEmail: string = "gg";

  users$!: Observable<string[]>;

  // constructor way: Service Nutzung
  constructor(private customService: CustomService) {}

  ngOnInit(): void {
    console.log(this.customService.users);
    this.users$ = this.customService.users$;
  }

  readOutputEvent(outputEvent: string) {
    console.log('OutputEvent', outputEvent);
  }
}
