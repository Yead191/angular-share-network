import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject } from "@angular/core";
import { LayoutService } from "../../../services/layout.service";
import { MENTOR_MENU, STUDENT_MENU } from "../../config/menu.config";
import { RouterModule } from "@angular/router";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";

@Component({
    selector: "app-sidebar",
    standalone: true,
    templateUrl: "./sidebar.component.html",
    imports: [
        CommonModule,     // ngIf, ngFor, ngClass
        RouterModule,     // routerLink, router-outlet
        MatIconModule,    // <mat-icon>
        MatRippleModule   // matRipple animation
    ],
    changeDetection: ChangeDetectionStrategy.OnPush

})

export class SideBarComponent {
    public layoutService = inject(LayoutService);
    activeMenu = computed(() => this.layoutService.currentRole() === 'student' ? STUDENT_MENU : MENTOR_MENU)
}