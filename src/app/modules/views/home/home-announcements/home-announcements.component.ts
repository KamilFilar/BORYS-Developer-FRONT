import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/config/services/info.service';

@Component({
  selector: 'app-home-announcements',
  templateUrl: './home-announcements.component.html',
  styleUrls: ['./home-announcements.component.scss']
})
export class HomeAnnouncementsComponent implements OnInit {

  announcmentTittle = "Informacje";
  annoncmentObj: any;

  constructor(
    private infoService: InfoService
  ) { }

  getInfoToDisplay() {
    this.infoService.getInfo().then(
      (res) => {
        this.annoncmentObj = res;
        console.log(this.annoncmentObj);
        
      }
    )
  }

  ngOnInit(): void {
    this.getInfoToDisplay();
  }

}
