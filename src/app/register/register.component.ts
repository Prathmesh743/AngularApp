import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

     registerForm: FormGroup;

   constructor(private formBuilder: FormBuilder)
   {
      console.log("register Form constructor");
   }

  ngOnInit()
  {
     console.log("Register component Intialize");
     this.registerForm= this.formBuilder.group({
       email_id: ['',[Validators.required]],
       name: [''],
       password: ['']
     });
  }

  CheckLogin(form: FormGroup)
  {
    if(this.registerForm.valid)
    {
      console.log(form.value.email_id);
      console.log(form.value.name);
      console.log(form.value.password);
    }
  }
}
