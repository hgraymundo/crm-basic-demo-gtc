import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';

@Component({
  selector: 'app-robot',
  templateUrl: './robot.component.html',
  styleUrls: ['./robot.component.css']
})
export class RobotComponent implements OnInit {

  _id: any;
  object_title = "Robots";
  btn_new= "Nuevo Robot";
  term: any;
  Robots: any[];
  p: number = 1;
  id: any;

  constructor(
    private tmpService: TmpService
  ) { }

  ngOnInit() {
    this.tmpService.getRobot().subscribe( result => {
      console.log(result);
      this.Robots = result.data;
    })
  }

}
