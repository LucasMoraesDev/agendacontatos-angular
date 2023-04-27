import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { LoginComponent } from "./components/home/login/login.component";
import { RegisterComponent } from "./components/home/register/register.component";
import { PasswordComponent } from "./components/home/password/password.component";


//Mapeamento de rotas de navegação para cada componente
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'acessar-conta' },
    { path: 'acessar-conta', component: LoginComponent },
    { path: 'criar-conta', component: RegisterComponent },
    { path: 'esqueci-minha-senha', component: PasswordComponent }
];


//Criando uma classe para carregar as configurações
//Esta classe deverá ser inserida no arquivo /app.module.ts
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


