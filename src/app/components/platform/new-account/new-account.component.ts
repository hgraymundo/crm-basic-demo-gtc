import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TmpService }  from '../../../services/tmp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  object_title = "Nueva Cuenta";

 constructor(
    private tmpService: TmpService,
    private formBuilder: FormBuilder,
    private ts: ToastrService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get f() { return this.registerForm.controls; this.submitted = false }

  createForm() {
    this.registerForm = this.formBuilder.group({
      account: ['', [Validators.required]],
      password: ['', [Validators.required]]

    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log( this.registerForm.value );
      this.tmpService.createAccount(this.registerForm.value).subscribe( res => { console.log(res);
        // this.ts.success(res[0].message);
        this.ts.success(res.MESSAGE);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }

}
