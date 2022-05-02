import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbutilityService {
  constructor(private http:HttpClient) { }
  insertService(name:string,aname:string,dur:string):Observable<any>{
    return this.http.get("http://localhost:5000/insert?songname="+name+"&artistname="+aname+"&duration="+dur);
  }
  viewService(){
    return this.http.get("http://localhost:5000/view");
  }
  viewArtistService(name:string){
    return this.http.get("http://localhost:5000/viewartistname?artistname="+name);
  }
  deleteService(name:string){
    return this.http.get("http://localhost:5000/delete?songname="+name);
  }
  updateService(name:string,duration:string){
    return this.http.get("http://localhost:5000/update?songname="+name+"&duration="+duration);
  }
}
