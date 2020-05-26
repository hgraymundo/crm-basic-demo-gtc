import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  object_title = "Cuentas";

  btn_new= "Nueva Cuenta";
  term: any;
  Accounts: any[];
  p: number = 1;
  id: any;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getAccount().subscribe( result => {
      console.log(result.data);
      this.Accounts = result.data;
    })
  }

}
