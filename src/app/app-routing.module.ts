import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAfazeresComponent } from './lista-afazeres/lista-afazeres.component';

const routes: Routes = [{
  path: 'tarefas',
  component: ListaAfazeresComponent
}, 
{
  path: '',
  redirectTo: 'tarefas',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
