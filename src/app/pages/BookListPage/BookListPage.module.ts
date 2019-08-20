import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookListPage } from './BookListPage.page';
import { LendBookPage } from '../LendBookPage/LendBookPage.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: BookListPage }])
  ],
  providers: [
    LendBookPage
  ],
  declarations: [BookListPage]
})
export class BookListPageModule {}
