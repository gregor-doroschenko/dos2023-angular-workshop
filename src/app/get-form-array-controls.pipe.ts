import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormArray, FormGroup } from '@angular/forms';

@Pipe({
  name: 'getFormArrayControls',
  standalone: true
})
export class GetFormArrayControlsPipe implements PipeTransform {

  transform(formGroup: FormGroup | AbstractControl, arrayControlName: string): FormArray | null {
    return (formGroup as FormGroup).get(arrayControlName) as FormArray;
  }

}
