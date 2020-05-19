import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmpService {

  constructor(private http: HttpClient) { }


  getRequest():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/process");
  }

  getCampaing():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/campaign");
  }

  createCampaignSMS(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/sms", data);
  }

  createCampaignEmail(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/email", data);
  }


}
