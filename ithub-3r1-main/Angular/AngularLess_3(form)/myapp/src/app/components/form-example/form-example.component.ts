import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-example.component.html',
  styleUrl: './form-example.component.css'
})
export class FormExampleComponent {
  public userForm: FormGroup
  public submited: boolean = false

  constructor(private formBulder: FormBuilder){
    // регистрация полей (и валидация)
    this.userForm = this.formBulder.group({
      firstName: ['', [Validators.required, Validators.minLength(4)]],
      age: [null, [Validators.required, Validators.max(100), Validators.min(1)]],
    })
  }

  handleSubmit(){
    this.submited = true
    // userForm.valid - валидация всех инпут полей
    if (this.userForm.valid){
      // userForm.value - объект со всеми зарегистрированными полями
      console.log(this.userForm.value)
    }
    console.log(this.userForm)
  }
}
