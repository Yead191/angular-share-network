import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, MatIconModule],
    templateUrl: './auth-layout.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLayoutComponent { }