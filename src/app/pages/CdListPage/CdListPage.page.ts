import { Component } from '@angular/core';
import { PretsService } from '../../services/prets.service';
import { NavController, ModalController } from '@ionic/angular';
import { LendCdPage } from '../LendCdPage/LendCdPage.page';

@Component({
  selector: 'app-CdListPage',
  templateUrl: 'CdListPage.page.html',
  styleUrls: ['CdListPage.page.scss']
})
export class CdListPage {

  constructor(private mediatheque:PretsService, private modalctrl: ModalController) {}

  public getJukeBox() {
    return this.mediatheque.getJukeBox()
  }

  public async open(cd: { "id":string,"nom":string,"auteur":string,"isLent":boolean}) {
    let modal = await this.modalctrl.create({component: LendCdPage, componentProps: {cd}});
    return await modal.present();
  }    
  
}
