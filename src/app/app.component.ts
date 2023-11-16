import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponent } from './first.component';
import { CustomService } from './custom.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'devopenspace2023';
  date = new Date();

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
