import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "album", component: AlbumComponent},
  {path:"album/fotoalbum/:id", component: AlbumDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
