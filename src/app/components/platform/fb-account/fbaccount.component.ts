import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-fbaccount',
  templateUrl: './fbaccount.component.html',
  styleUrls: ['./fbaccount.component.css']
})
export class FbaccountComponent implements OnInit {

  _id: any;
  object_title = "Cuentas FB";
  btn_new= "Nueva Cuenta FB";
  term: any;
  Accounts: any[];
  p: number = 1;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getFBAccount().subscribe( result => {
      console.log(result);
      this.Accounts = result.data;
    })
  }

}
