import { NgModule }           from '@angular/core';
import { RouterModule,
         Routes,
         PreloadAllModules }  from '@angular/router';
import { LoginComponent }     from './pages/RegularUser/login.component';
import { RegisterComponent }  from './pages/register.component';
import { DiscoverComponent }  from './pages/discover.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: 'home',     component: HomeComponent},
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
            { enableTracing: false,                     // <-- debugging purposes only
              preloadingStrategy: PreloadAllModules }, 
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouteModule {}