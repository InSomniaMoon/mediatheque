import { Component } from '@angular/core';
import { PretsService } from '../../services/prets.service';
import { ModalController } from '@ionic/angular';
import { LendBookPage } from '../LendBookPage/LendBookPage.page';

@Component({
  selector: 'app-BookListPage',
  templateUrl: 'BookListPage.page.html',
  styleUrls: ['BookListPage.page.scss']
})
export class BookListPage {

  constructor(private mediatheque:PretsService, private modalCtrl: ModalController) {}

  public getBibliotheque() {
    return this.mediatheque.getBibliotheque()
  }

  public async open(livre: { "id":string,"nom":string,"auteur":string,"isLent":boolean}) {
    
    const modal = await this.modalCtrl.create({component: LendBookPage, componentProps: {livre}});
    return await modal.present();
  }    


}
