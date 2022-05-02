import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  updateSuccess = "";
  showFlag:boolean = false;
  showInsert:boolean = false;
  showUpdate:boolean = false;
  showTable:boolean = true;
  clickedSong={
    songname:"",
    artistname:"",
    duration:""
  }
  songList:any;
  constructor(private mydb:DbutilityService) { 
    this.showFlag = true;
    this.showUpdate = false;
    this.mydb.viewService().subscribe(
      data => {
        this.songList = data;
        console.log(this.songList);
        console.log("view Service completed");
      }
    )
  }

  ngOnInit(): void {
  }
  delete(index:number){
    alert("do you want to delete the song"+this.clickedSong.songname);
    this.clickedSong = this.songList[index];
    this.mydb.deleteService(this.clickedSong.songname).subscribe(
      data => {
        console.log(data);
        location.reload();
      }
    )
    this.showTable = false;
    this.showTable = true;
  }
  update(index:number){
    this.clickedSong = this.songList[index];
    this.showUpdate = true;
  }
  updateConfirm(){
    this.mydb.updateService(this.clickedSong.songname,this.clickedSong.duration).subscribe(
      data=> {
        console.log(data);
      }
    )
    this.showUpdate = false;
    this.updateSuccess = "Updated Successfully!!"
  }
}
