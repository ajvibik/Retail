import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './login/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component'


 
export const AppRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'sidebar', component: SidebarComponent },
    { path: 'layout', component: LayoutComponent },
    { path:'**', component: LoginComponent}
    
];
 
export const ROUTING: ModuleWithProviders = RouterModule.forRoot(AppRoutes);