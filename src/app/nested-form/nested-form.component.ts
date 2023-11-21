import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder, FormArray, AbstractControl } from '@angular/forms';
import { GetFormArrayControlsPipe } from '../get-form-array-controls.pipe';

@Component({
  selector: 'app-nested-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GetFormArrayControlsPipe],
  templateUrl: './nested-form.component.html',
  styleUrl: './nested-form.component.scss'
})
export class NestedFormComponent implements OnInit {
  searchForm!: FormGroup;
  searchForm1!: FormGroup;

  test: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      properties: this.fb.array([this.createItem()])
    });
  }

  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      desg: '',
      socialMediaLinks: this.fb.array([this.createSocialMediaItem()])
    });
  }

  createSocialMediaItem(): FormGroup {
    return this.fb.group({
      socialMediaCategory: [''],
      link: ['', Validators.required]
    });
  }

  submit(formData: any) {
    this.test = formData.value;
    console.log(formData);
    // to do something
  }

  onAddSocialMediaLink(linkForm: FormGroup | AbstractControl) {
    ((linkForm as FormGroup).get('socialMediaLinks') as FormArray).push(this.createSocialMediaItem());
  }

  onDelSocialMediaLink(linkForm: FormGroup | AbstractControl, index: any) {
    ((linkForm as FormGroup).get('socialMediaLinks') as FormArray).removeAt(index);
  }

  onAddProperty() {
    (this.searchForm.get('properties') as FormArray).push(this.createItem());
  }

  onDelProperty(index: any) {
    (this.searchForm.get('properties') as FormArray).removeAt(index);
  }
}
