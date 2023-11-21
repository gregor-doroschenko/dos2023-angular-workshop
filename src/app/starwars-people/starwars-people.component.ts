import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { BackendService, SwapiResult } from '../backend.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-starwars-people',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './starwars-people.component.html',
  styleUrl: './starwars-people.component.scss'
})
export class StarwarsPeopleComponent implements OnInit {

  swapiResult$!: Observable<SwapiResult>;

  constructor(private backendService: BackendService) {}

  ngOnInit(): void {
    this.swapiResult$ = this.backendService.loadList();
  }

}
