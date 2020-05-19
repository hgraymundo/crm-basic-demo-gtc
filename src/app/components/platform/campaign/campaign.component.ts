import { Component, OnInit } from '@angular/core';
import { TmpService } from '../../../services/tmp.service';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  object_title = "Campañas";
  btn_new= "Nueva Campaña SMS";
  btn_new_email= "Nueva Campaña EMAIL";
  term: any;
  Campaigns: any[];
  p: number = 1;
  id: any;

  constructor(private tmpService: TmpService) { }

  ngOnInit() {
    this.tmpService.getCampaing().subscribe( result => {
      this.Campaigns = result.data;
    })
  }

}
