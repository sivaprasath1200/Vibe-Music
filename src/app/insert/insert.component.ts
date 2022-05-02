import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  showInsert:boolean = true;
  newSong={
    songname:"",
    artistname:"",
    duration:""
  }
  successMessage = ""
  constructor(private mydb:DbutilityService) {
   }

  ngOnInit(): void {
  }
  insert(){
    this.mydb.insertService(this.newSong.songname,this.newSong.artistname,this.newSong.duration).subscribe(
      data => {
        if(data['message']){
          console.log("successfully inserted");
        }
      }
    )
    this.showInsert = false;
    this.successMessage = "Inserted successfully!!";
  }
  dontShowInsert(){
    this.showInsert = false;
  }
}
