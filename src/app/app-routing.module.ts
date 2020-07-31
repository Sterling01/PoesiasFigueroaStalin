import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-poesias',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'lista-poesias',
    loadChildren: () => import('./lista-poesias/lista-poesias.module').then( m => m.ListaPoesiasPageModule)
  },
  {
    path: 'crear-poesia',
    loadChildren: () => import('./crear-poesia/crear-poesia.module').then( m => m.CrearPoesiaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'poesia',
    loadChildren: () => import('./poesia/poesia.module').then( m => m.PoesiaPageModule)
  },
  {
    path: 'poesia/:id',
    loadChildren: () => import('./poesia/poesia.module').then( m => m.PoesiaPageModule)
  },
  {
    path: 'comentar-poesia',
    loadChildren: () => import('./comentar-poesia/comentar-poesia.module').then( m => m.ComentarPoesiaPageModule)
  },
  {
    path: 'comentar-poesia/:id',
    loadChildren: () => import('./comentar-poesia/comentar-poesia.module').then( m => m.ComentarPoesiaPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
