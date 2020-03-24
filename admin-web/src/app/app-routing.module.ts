import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';
import { UnauthenticatedComponent } from './unauthenticated/unauthenticated.component';
import { ChangesComponent } from './changes/changes.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'read' },
  { path: 'read', component: ReadComponent },
  { path: 'write', component: WriteComponent },
  { path: 'unauthenticated', component: UnauthenticatedComponent },
  { path: 'changes', component: ChangesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
