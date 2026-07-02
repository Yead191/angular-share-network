import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: 'auth/login',
        pathMatch: "full"
    },
    {
        path: "auth",
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'mentor',
        loadChildren: () => import('./features/mentor/mentor.routes').then(m => m.MentorRoutes)
    }

];
