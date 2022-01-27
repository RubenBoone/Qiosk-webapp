import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecurityComponent } from './security/security/security.component';
import { UsersTableComponent } from './user/users-table/users-table.component';

const routes: Routes = [
  { path: 'login', component: SecurityComponent },
  { path: 'logout', component: SecurityComponent },
  { path: 'users', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: 'tags', loadChildren: () => import('./tag/tag.module').then(m => m.TagModule) },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
