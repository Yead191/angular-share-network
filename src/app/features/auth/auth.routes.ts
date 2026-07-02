import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../../core/layout/auth-layout/auth-layout';
import { LoginPageComponent } from './pages/login/login.component';


export const AUTH_ROUTES: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        children: [
            {
                path: 'login',
                component: LoginPageComponent,
            },
        ],
    },
];