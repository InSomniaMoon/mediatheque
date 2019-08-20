import { Component, OnInit, Input } from '@angular/core';
    import { NavParams, ModalController } from '@ionic/angular';

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
                public modalCtrl: ModalController) {
    }
    ngOnInit() {
      this.livre = this.navParam.get('livre')
    }
  } 