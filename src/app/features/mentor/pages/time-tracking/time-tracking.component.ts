import { CommonModule, DatePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { assignedStudents, timeTracking } from "../../config/time-tracking.config";

@Component({
    selector: "app-time-tracking",
    standalone: true,
    imports: [CommonModule, MatButtonModule, MatIconModule, MatMenuModule, MatDialogModule, MatSnackBarModule],
    templateUrl: "./time-tracking.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [DatePipe]
})

export class TimeTrackingComponent {
    public dialog = inject(MatDialog)
    public snackBar = inject(MatSnackBar)
    public datePipe = inject(DatePipe)

    assignedStudent = signal(assignedStudents)
    timeTracking = signal(timeTracking)

    getDurationDisplay(start: string, end: string): string {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diffMs = endDate.getTime() - startDate.getTime();
        const diffHrs = Math.floor(diffMs / 3600000);
        const diffMins = Math.floor((diffMs % 3600000) / 60000);
        return `${diffHrs}h ${diffMins}m`;
    }
}