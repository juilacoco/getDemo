import {NgModule} from '@angular/core';
import {ServersComponent} from './servers/servers.component';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './users/user/user.component';
import {UsersComponent} from './users/users.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';


const appRoutes: Routes = [
  // empty path for home page
  {path: 'not-found', component: PageNotFoundComponent},
  // {path: '**', redirectTo: '/not-found'},
  {path: '', component: HomeComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {path: ':id/:name', component: UserComponent}]
  },
  {
    path: 'servers', component: ServersComponent, children: [
      {path: 'id', component: ServersComponent},
      {path: ':id/edit', component: EditServerComponent}]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
