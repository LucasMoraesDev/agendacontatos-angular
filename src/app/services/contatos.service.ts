import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContatosPostRequest } from "../models/requests/contatos-post.request.model";
import { Observable } from "rxjs";
import { ContatosPostResponse } from "../models/responses/contatos-post.response.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class ContatosService {

    constructor(
        private httpClient: HttpClient
    ) {
    }

    post(contatosPostRequest: ContatosPostRequest): Observable<ContatosPostResponse> {
        return this.httpClient.post<ContatosPostResponse>
            (environment.apiContatos + "/contatos",
                contatosPostRequest);
    }

}