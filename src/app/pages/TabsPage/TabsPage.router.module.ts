import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './TabsPage.page';
import { LendBookPage } from '../LendBookPage/LendBookPage.page';
import { LendCdPage } from '../LendCdPage/LendCdPage.page';

const routes: Routes = [
  { path: 'tabs', component: TabsPage, children: [
      { path: 'BookListPage', children: [
          { path: '', loadChildren: () => import('../BookListPage/BookListPage.module').then(m => m.BookListPageModule) }
        ]
      },

      { path: 'CdListPage', children: [
          {
            path: '', loadChildren: () => import('../CdListPage/CdListPage.module').then(m => m.CdListPageModule)
          }
        ]
      },

      { path: '', redirectTo: '/tabs/BookListPage', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/tabs/BookListPage', pathMatch: 'full' },

  { path: 'LendBookPage', component: LendBookPage },
  { path: 'LendBookPage/:livre', component: LendBookPage },
  { path: 'LendCdPage', component: LendCdPage },
  { path: 'LendCdPage/:cd', component: LendCdPage }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
