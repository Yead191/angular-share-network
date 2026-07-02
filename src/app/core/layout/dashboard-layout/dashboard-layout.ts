import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../../services/layout.service';
import { SideBarComponent } from '../component/sidebar/sidebar.component';
import { HeaderComponent } from '../component/header/header-component';

@Component({
    selector: 'app-dashboard-layout',
    standalone: true,
    imports: [CommonModule, RouterModule, SideBarComponent, HeaderComponent],
    templateUrl: './dashboard-layout.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayout {
    public layoutService = inject(LayoutService);
}