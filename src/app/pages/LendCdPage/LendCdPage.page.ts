import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { PretsService } from 'src/app/services/prets.service';

@Component({
    selector: 'app-LendCdPage',
    templateUrl: 'LendCdPage.page.html',
    styleUrls: ['LendCdPage.page.scss']
  })

  export class LendCdPage implements OnInit {
    @Input() cd: { 
      "id":string,
      "nom":string,
      "auteur":string,
      "isLent":boolean
    }
    
    constructor(private navParam: NavParams, 
      public modalCtrl: ModalController,
      private mediatheque: PretsService) {
    }
    ngOnInit() {
      this.cd = this.navParam.get('cd')
    }

    public lend(cd) {
      this.mediatheque.lend(cd)
    }

    public return(cd) {
      this.mediatheque.return(cd)
    }

  }