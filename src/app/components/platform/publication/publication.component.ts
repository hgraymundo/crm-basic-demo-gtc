import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';
import { ActivatedRoute } from '@angular/router';



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

  constructor(
    private tmpService: TmpService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.tmpService.getPublication(this.id).subscribe( result => {
      console.log(result);
      
      this.Publications = result.data;
    })
  }
}
