import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
//import { AuthGuard } from './auth/auth.guard';

export const AppRoutes: Routes = [
    //{ path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    { path: 'home', component: HomeComponent },
    {
        path: 'signup', component: LoginComponent,
        children: [{ path: '', component: RegisterComponent }]
    },
    {
        path: 'login', component: SignInComponent
    },
    { path : '', redirectTo:'/login', pathMatch : 'full'},
    { path:'**', component: SignInComponent},
    
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);