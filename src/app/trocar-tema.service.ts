import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class TrocarTemaService {
    constructor() {}
    trocarTema(tema: string) {
        document.body.dataset['bsTheme'] = tema;
    }

    obterTema(): string | undefined {
        return document.body.dataset['bsTheme']?.toString();
    }
}
