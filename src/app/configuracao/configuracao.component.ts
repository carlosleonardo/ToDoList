import { Component, inject, input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrocarTemaService } from '../trocar-tema.service';

@Component({
    selector: 'app-configuracao',
    imports: [FormsModule],
    templateUrl: './configuracao.component.html',
    styleUrl: './configuracao.component.css'
})
export class ConfiguracaoComponent implements OnInit {
    ngOnInit(): void {
        this.temaEscolhido = this.servicoTrocarTema.obterTema();
    }
    servicoTrocarTema = inject(TrocarTemaService);
    temaEscolhido: string | undefined;

    trocarTema() {
        this.servicoTrocarTema.trocarTema(this.temaEscolhido as string);
        sessionStorage.setItem('tema', this.temaEscolhido as string);
    }
}
