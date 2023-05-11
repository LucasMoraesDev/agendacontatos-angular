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


}


