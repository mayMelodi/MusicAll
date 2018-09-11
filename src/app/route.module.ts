import { NgModule }           from '@angular/core';
import { RouterModule,
         Routes,
         PreloadAllModules }  from '@angular/router';
import { LoginComponent }     from './pages/RegularUser/login.component';
import { RegisterComponent }  from './pages/RegularUser/register.component';
import { DiscoverComponent }  from './pages/RegularUser/discover.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: 'home',     component: HomeComponent},
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