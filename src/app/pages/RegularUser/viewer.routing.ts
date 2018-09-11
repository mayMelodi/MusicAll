import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { ContactUsComponent } from './contact-us.component';
import { UserHomeComponent } from './user-home.component';

export const ViewerRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: 'home',   component: UserHomeComponent },
    { path: 'about',   component: AboutComponent },
    { path: 'login',   component: LoginComponent },
    { path: 'contact', component: ContactUsComponent}
]);