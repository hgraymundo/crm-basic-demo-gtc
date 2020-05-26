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

  //:::::::::
  createFBAccount(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/fb_account", data);
  }
  getFBAccount():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_account");
  }
  getPublication(data: any):Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_account/"+data+"/fb_publication");
  }

  getPublicationById(_id: any):Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_publication/" + _id);
  }

  createPubComment(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/pub_comment", data);
  }

  getPubComment(_id: any):Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/pub_comment/" + _id);
  }

  getAccount():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/fb_account");
  }

  createAccount(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/fb_account", data);
  }
  
  //:::::::::::

  //
  createRobot(data: any):Observable<any> {
    return this.http.post<any>("http://51.222.31.215:8181/api/v1/robot", data);
  }
  getRobot():Observable<any> {
    return this.http.get<any>("http://51.222.31.215:8181/api/v1/robot");
  }
  
}
