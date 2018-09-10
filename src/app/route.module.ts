import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }        from './pages/home.component';
import { ContactUsComponent }   from './pages/contact-us.component';
import { AboutComponent }       from './pages/about.component';
import { LoginComponent }       from './pages/login.component';
import { RegisterComponent }    from './pages/register.component';
import { DiscoverComponent }    from './pages/discover.component';

const appRoutes: Routes = [
    { path: 'home',     component: HomeComponent },
    { path: 'contact',  component: ContactUsComponent },
    { path: 'about',    component: AboutComponent },
    { path: 'login',    component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'discover', component: DiscoverComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
   // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule {}