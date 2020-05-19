import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TmpService }  from '../../../services/tmp.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-campaing-email',
  templateUrl: './new-campaing-email.component.html',
  styleUrls: ['./new-campaing-email.component.css']
})
export class NewCampaingEmailComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  object_title = "Nueva campaña EMAIL";

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
      to: ['', [Validators.required]],
      subject: ['', [Validators.required]],
      text: ['', [Validators.required]],
      html: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) { return; }
    if(this.submitted) { console.log(this.registerForm.value);
      this.tmpService.createCampaignEmail(this.registerForm.value).subscribe( res => { console.log(res);
        // this.ts.success(res[0].message);
        this.ts.success(res.message);
        this.registerForm.reset()
        this.submitted = false;
      })
    }
  }

}
