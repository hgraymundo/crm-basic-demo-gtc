import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-pub-comment',
  templateUrl: './pub-comment.component.html',
  styleUrls: ['./pub-comment.component.css']
})
export class PubCommentComponent implements OnInit {

  object_title = "Commentarios a Publicar";
  // btn_new= "Nuevo Movimiento";
  term: any;
  Comments: any[];
  p: number = 1;
  id: any;

  constructor(
    private tmpService: TmpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id)
    console.log("Get Comments")
    this.tmpService.getPubComment(this.id).subscribe( result => {
      console.log(result)
      console.log(result.data);
      this.Comments = result.data;
    })
  }
}
