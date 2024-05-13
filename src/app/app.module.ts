import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAfazeresComponent } from './lista-afazeres/lista-afazeres.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BDNaMemoriaService } from './bdna-memoria.service';
import { TarefaDetalheComponent } from './tarefa-detalhe/tarefa-detalhe.component';
import { AdicionarTarefaComponent } from './adicionar-tarefa/adicionar-tarefa.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(BDNaMemoriaService, { dataEncapsulation: false }),
        NgbModule,
        FormsModule,
        ListaAfazeresComponent,
        TarefaDetalheComponent,
        AdicionarTarefaComponent,
        PaginaInicialComponent,
        PaginaNaoEncontradaComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
