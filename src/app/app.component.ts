import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { TrocarTemaService } from './trocar-tema.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet, RouterLinkActive],
})
export class AppComponent implements OnInit {
    servicoTrocarTema = inject(TrocarTemaService);
    temaEscolhido = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';

    ngOnInit(): void {
        let tema = sessionStorage.getItem('tema');
        if (!tema) {
            tema = this.temaEscolhido;
        }
        this.servicoTrocarTema.trocarTema(tema as string);
    }
    title = 'Lista de Tarefas';
}
