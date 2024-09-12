import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/main-content/main-content.module').then(
        (m) => m.MainContentModule
      ),
  },
  {
    path: '**',
    redirectTo: '', // Catch-all route, redirects to home
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
