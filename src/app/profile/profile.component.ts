import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  @Input() email!: string;
  @Output() emailChange = new EventEmitter<string>();

  formGroup!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', Validators.minLength(10)),
      email: new FormControl('', Validators.email)
    });

    this.formGroup.statusChanges.subscribe(v => console.log('Status', v));
  }

  saveDate(value: any) {
    console.log('Data', value);
  }
}
