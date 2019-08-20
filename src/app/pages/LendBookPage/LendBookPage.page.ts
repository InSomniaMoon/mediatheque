import { Component, OnInit, Input } from '@angular/core';
    import { NavParams, ModalController } from '@ionic/angular';
import { PretsService } from 'src/app/services/prets.service';

@Component({
    selector: 'app-LendBookPage',
    templateUrl: 'LendBookPage.page.html',
    styleUrls: ['LendBookPage.page.scss']
  })

  export class LendBookPage implements OnInit {
    @Input() livre: {
      'id':string,
      'nom':string,
      'auteur':string,
      "isLent":boolean
    }
    
    constructor(private navParam: NavParams,
                public modalCtrl: ModalController,
                private mediatheque: PretsService) {
    }
    ngOnInit() {
      this.livre = this.navParam.get('livre')
    }

    public lend(livre) {
      this.mediatheque.lend(livre)
    }

    public return(livre) {
      this.mediatheque.return(livre)
    }
  } 