import { PlayerComponent } from "./player.component";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule } from "@angular/router";

export const PlayerRoutes: ModuleWithProviders = RouterModule.forChild([
    { path: 'home',   component: PlayerComponent },
]);