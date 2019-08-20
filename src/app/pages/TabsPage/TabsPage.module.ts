import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { TabsPageRoutingModule } from './TabsPage.router.module';

import { TabsPage } from './TabsPage.page';
import { LendBookPage } from '../LendBookPage/LendBookPage.page';
import { LendCdPage } from '../LendCdPage/LendCdPage.page';
import { SettingsPage } from '../SettingsPage/SettingsPage.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
    LendBookPage,
    LendCdPage,
    SettingsPage
],
})
export class TabsPageModule {}
