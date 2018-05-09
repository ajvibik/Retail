import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from '../dashboard/dashboard.component';



 
export const layoutRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path:'**', component: DashboardComponent}
    
];
 
export const LAYOUT_ROUTING: ModuleWithProviders = RouterModule.forRoot(layoutRoutes);