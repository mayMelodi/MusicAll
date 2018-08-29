import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './pages/home.component';
import { LoginComponent }       from './pages/login.component';
import { ContactUsComponent }   from './pages/contact-us.component';
import { AboutComponent }       from './pages/about.component';

const appRoutes: Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'login',    component: LoginComponent },
    { path: 'contact',  component: ContactUsComponent },
    { path: 'about',    component: AboutComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
   // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule {}