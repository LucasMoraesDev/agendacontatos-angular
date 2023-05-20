/*
    Classe de modelo de dados para a 
    resposta do serviço POST /contatos
*/
export class ContatosPostResponse {
    idContato: string = '';
    nome: string = '';
    email: string = '';
    telefone: string = '';
    dataCriacao: Date | null = null;
    idUsuario: string = '';
}