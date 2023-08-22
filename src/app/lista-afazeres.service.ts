import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListaAfazeresService {
  private url: string = "api/tarefas";
  private tarefas: Tarefa[] = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };
  
  constructor(private http: HttpClient) { }
  
  /**
   * Obtém todas as tarefas cadastradas
   * 
   * @returns Observable de tarefa
   */
  obterTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url).pipe(
      catchError(this.handleError<Tarefa[]>('obterTarefas', []))
    );
  }

  /**
   * Exclui a tarefa selecionada
   * 
   * @param id id da tarefa
   * @returns Observable da tarefa
   */
  excluirTarefa(id: number): Observable<Tarefa> {
    return this.http.delete<Tarefa>(`${this.url}/${id}`).pipe(
      catchError(this.handleError<Tarefa>(`excluirTarefa id=${id}`))
    );
  }

  /**
   * 
   * Insere uma nova tarefa
   * 
   * @param tarefa a tarefa a ser adicionada
   * @returns Observable da tarefa
   */
  adicionarTarefa(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.url, tarefa, this.httpOptions);
  }

  /**
   * Recupera a tarefa dado o id dela
   * 
   * @param id id da tarefa
   * @returns Observable de tarefa
   */
  obterTarefa(id: number) : Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.url}/${id}`);
  }

  /**
     * Faz o tratamento do erro, registrando no log e no console
     * 
     * @param operation o nome da operação para registrar
     * @param result um Observable válido
     * @returns nada
     */
  private handleError<T>(operation: string  = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      
      return of(result as T);
    };
  }
}
