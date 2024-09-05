import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAfazeresComponent } from './lista-afazeres/lista-afazeres.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { ConfiguracaoComponent } from './configuracao/configuracao.component';

const routes: Routes = [
    {
        path: '',
        component: PaginaInicialComponent,
    },
    {
        path: 'lista-tarefas',
        component: ListaAfazeresComponent,
    },
    {
        path: 'configuracao',
        component: ConfiguracaoComponent,
    },
    {
        path: '**',
        component: PaginaNaoEncontradaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
