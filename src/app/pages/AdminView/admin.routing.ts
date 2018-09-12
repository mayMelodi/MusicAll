import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminComponent } from './admin.component';

export const AdminRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: '',   component: AdminComponent },
]);