import { Injectable } from "@angular/core";
import { AutenticarResponse } from "../models/responses/autenticar.response.model";


@Injectable({
    providedIn: 'root'
})
export class AuthenticationHelper {


    /*
        Método para salvar os dados do usuário
        autenticado na local storage
    */
    signIn(data: AutenticarResponse): void {
        localStorage.setItem('auth', JSON.stringify(data));
    }


    /*
        Método para verificar se o usuário
        está autenticado
    */
    isSignedIn(): boolean {
        return localStorage.getItem('auth') != null;
    }


    /*
        Método para retornar os dados
        gravados na local storage
    */
    getData(): AutenticarResponse | null {
        let data = localStorage.getItem('auth');
        if (data != null)
            return JSON.parse(data) as AutenticarResponse;
        else
            return null;
    }


    /*
        Método para apagar o conteudo
        da local storage
    */
    signOut(): void {
        localStorage.removeItem('auth');
    }
}


