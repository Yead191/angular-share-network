import { Component, inject } from "@angular/core";
import { LayoutService } from "../../../services/layout.service";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from '@angular/material/menu';
@Component({
    selector: "app-header",
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatMenuModule
    ],
    templateUrl: "./header-component.html",
})

export class HeaderComponent {
    public layoutService = inject(LayoutService)
}