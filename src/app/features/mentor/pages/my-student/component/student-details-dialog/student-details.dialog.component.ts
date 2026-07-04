import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { Student } from "../../../../../../shared/types/student.types";
import { CommonModule } from "@angular/common";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from '@angular/material/chips';
export interface StudentDialogData {
    student: Student;
}

@Component({
    selector: "app-student-details-dialog",
    standalone: true,
    imports: [CommonModule, MatIconModule, MatDialogModule, MatChipsModule],
    templateUrl: "./student-details.dialog.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class StudentDetailsDialogComponent {
    public data: StudentDialogData = inject(MAT_DIALOG_DATA)
}