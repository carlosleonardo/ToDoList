import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrocarTemaService } from '../trocar-tema.service';

@Component({
    selector: 'app-configuracao',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './configuracao.component.html',
    styleUrl: './configuracao.component.css',
})
export class ConfiguracaoComponent {
    temaEscolhido = 'dark';
    servicoTrocarTema = inject(TrocarTemaService);
    trocarTema() {
        this.servicoTrocarTema.trocarTema(this.temaEscolhido);
        const tema = this.servicoTrocarTema.obterTema();
        sessionStorage.setItem('tema', tema as string);
    }
}
