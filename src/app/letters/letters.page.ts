import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.page.html',
  styleUrls: ['./letters.page.scss'],
})
export class LettersPage implements OnInit {

  constructor(public globaldata:GlobalService,
    public modalController:ModalController) { }

  ngOnInit() {
  }

}
