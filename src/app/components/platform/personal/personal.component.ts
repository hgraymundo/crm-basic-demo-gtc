import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  _id: any;
  object_title = "Colaboradores";
  btn_new= "Nuevo Colaborador";
  term: any;
  Colaborators: any[];
  p: number = 1;

  constructor(
    private route: ActivatedRoute,
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getColaborator().subscribe( result => {
      console.log(result)
      this.Colaborators = result.data;
    })
  }

}
