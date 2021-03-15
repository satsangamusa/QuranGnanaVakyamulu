import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-mundhumaata',
  templateUrl: './mundhumaata.page.html',
  styleUrls: ['./mundhumaata.page.scss'],
})
export class MundhumaataPage implements OnInit {

 
  constructor(public globaldata:GlobalService,
    public modalController:ModalController) { }


  ngOnInit() {
  }

}
