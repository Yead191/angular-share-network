import { Component, ChangeDetectionStrategy, signal, inject } from "@angular/core";
import { events, goals, myStudent, resources, schedule } from "../../config/my-student.config";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { StudentDetailsDialogComponent } from "./component/student-details-dialog/student-details.dialog.component";

@Component({
    selector: "app-my-student",
    standalone: true,
    templateUrl: "./my-student.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, MatIconModule, MatButtonModule, MatProgressBarModule, MatDialogModule]
})
export class MyStudentComponent {
    public dialog = inject(MatDialog)
    student = signal(myStudent)
    goals = signal(goals)
    schedule = signal(schedule)
    resources = signal(resources)
    events = signal(events)

    // Helper for UI styling
    getIconForResource(type: string): string {
        const icons: any = { 'pdf': 'picture_as_pdf', 'video': 'play_circle', 'link': 'link' };
        return icons[type] || 'insert_drive_file';
    }


    openDetailsModal() {
        const dialogRef = this.dialog.open(StudentDetailsDialogComponent, {
            width: '400px',
            data: { student: this.student() }
        })
        dialogRef.afterClosed().subscribe((result: any) => {
            console.log("Modal closed:", result);
        })
    }
    uploadResource() {
        console.log('btn clicked')
    }
}