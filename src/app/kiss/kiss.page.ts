import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-kiss',
  templateUrl: './kiss.page.html',
  styleUrls: ['./kiss.page.scss'],
})
export class KISSPage implements OnInit {

  constructor(public globaldata:GlobalService,
    public modalController:ModalController) { }

  ngOnInit() {
  }

}
