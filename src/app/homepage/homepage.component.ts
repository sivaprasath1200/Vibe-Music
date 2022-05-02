import { Component, OnInit } from '@angular/core';
import { DbutilityService } from '../dbutility.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imageUrl:string = "../../assets/img/Hemlock Stranger (2).png";
  showCards:boolean = true;
  songList:any;
  showTable:boolean = false;
  constructor(private mydb:DbutilityService) {
    
  }

  ngOnInit(): void {
  }
  func(artistname:string){
    this.showCards = false;
    this.showTable = true;
    this.mydb.viewArtistService(artistname).subscribe(
      data => {
        this.songList = data;
        console.log(this.songList);
        console.log("view Service completed");
      }
    )
  }
  changeUrl(){
    this.imageUrl = "../../assets/img/Hemlock Stranger (3).png";
  }
  changeUrl2(){
    this.imageUrl = "../../assets/img/Hemlock Stranger (2).png";
  }

}
