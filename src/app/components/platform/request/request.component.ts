import { Component, OnInit } from '@angular/core';

import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  object_title = "Solicitudes";
  btn_new= "Nuevo Movimiento";
  term: any;
  Requests: any[];
  p: number = 1;
  id: any;
  constructor(private tmpService: TmpService) { }

  ngOnInit() {
    this.tmpService.getRequest().subscribe( result => {
      console.log(result.data);
      this.Requests = result.data;
    })
  }

}
