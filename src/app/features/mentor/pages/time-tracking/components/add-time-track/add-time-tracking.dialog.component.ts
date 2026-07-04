import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    selector: 'app-add-time-tracking-dialog',
    templateUrl: './add-time-tracking.dialog.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: []
})

export class AddTimeDialogComponent {
    public data = inject(MAT_DIALOG_DATA)
    private dialogRef = inject(MatDialogRef)
    private fb = inject(FormBuilder)

}