import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  object_title = "Publicaciones";
  // btn_new= "Nuevo Movimiento";
  term: any;
  Publications: any[];
  p: number = 1;
  id: any;

  constructor(private tmpService: TmpService) { }

  ngOnInit() {
    this.tmpService.getPublication().subscribe( result => {
      console.log(result);
      this.Publications = result.data;
    })
  }
}
