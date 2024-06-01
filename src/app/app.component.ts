import { Component, OnInit, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TrocarTemaService } from './trocar-tema.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [RouterLink, RouterOutlet],
})
export class AppComponent implements OnInit {
    servicoTrocarTema = inject(TrocarTemaService);

    ngOnInit(): void {
        const tema = sessionStorage.getItem('tema');
        this.servicoTrocarTema.trocarTema(tema as string);
    }
    title = 'Lista de Tarefas';
}
