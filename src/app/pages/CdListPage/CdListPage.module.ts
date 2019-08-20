import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CdListPage } from './CdListPage.page';
import { LendCdPage } from '../LendCdPage/LendCdPage.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: CdListPage }])
  ],
  providers: [
    LendCdPage
  ],
  declarations: [CdListPage]
})
export class CdListPageModule {}
