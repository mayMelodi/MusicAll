import { RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AboutComponent } from './about.component';
import { LoginComponent } from './login.component';
import { ContactUsComponent } from './contact-us.component';
import { UserHomeComponent } from './user-home.component';
import { RegisterComponent } from './register.component';
import { DiscoverComponent } from './discover.component';

export const ViewerRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: '',   component: UserHomeComponent },
    { path: 'about',   component: AboutComponent },
    { path: 'contact', component: ContactUsComponent},
    { path: 'register', component: RegisterComponent },
    { path: 'login',    component: LoginComponent },
    { path: 'discover', component: DiscoverComponent },
]);