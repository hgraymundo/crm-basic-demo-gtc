import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  _id: any;
  object_title = "Comentarios";
  btn_new= "Nuevo Comentario";
  term: any;
  Comments: any[];
  p: number = 1;
  id: any;

  constructor(
    private route: ActivatedRoute,
    private tmpService: TmpService

  ) { }

  ngOnInit() {
    this._id = this.route.snapshot.paramMap.get('id');
    console.log(this._id);
    this.tmpService.getFBComment().subscribe( result => {
      console.log(result);
      this.Comments = result.data;
    })
  }

}
