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

  createPublication(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/publication", data);
  }
  getPublication():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/publication");
  }

  createFBComment(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/fb_comment", data);
  }
  getFBComment():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_comment");
  }
  
  //  
  creatColaborator(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/personal", data);
  }
  getColaborator():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/personal");
  }

  //
  creatFBAccount(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/fb_account", data);
  }
  getFBAccount():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_account");
  }

}
