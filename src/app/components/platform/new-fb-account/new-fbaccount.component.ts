import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TmpService }  from '../../../services/tmp.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-new-fbaccount',
  templateUrl: './new-fbaccount.component.html',
  styleUrls: ['./new-fbaccount.component.css']
})
export class NewFbaccountComponent implements OnInit {

  _id: any;
  registerForm: FormGroup;
  submitted = false;
  object_title = "Nueva Cuenta de FB";


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
      user: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log( this.registerForm.value );
      this.tmpService.createFBAccount(this.registerForm.value).subscribe( res => { console.log(res);
        // this.ts.success(res[0].message);
        this.ts.success(res.MESSAGE);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }

}
