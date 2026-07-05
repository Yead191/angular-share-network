import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentInfo } from '../../../config/time-tracking.config';

export const SESSION_TYPES = [
  '1-on-1 Session', 'Group Session', 'Code Review', 
  'Project Discussion', 'Career Guidance', 'Technical Support', 'Other'
];

@Component({
  selector: 'app-add-time-track-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6 md:p-8 bg-white rounded-3xl relative">
      <div class="flex items-center gap-3 mb-6">
        <mat-icon class="text-indigo-600 !w-8 !h-8 text-[32px]">schedule</mat-icon>
        <h2 class="text-2xl font-bold text-slate-900 m-0">Log Mentorship Time</h2>
      </div>

      <form [formGroup]="form" (ngSubmit)="onSubmit()" class="flex flex-col gap-5">
        
        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-slate-700">Student (Optional)</label>
          <select formControlName="studentId" class="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-600 outline-none w-full">
            <option [ngValue]="null">Select a student (optional)</option>
            @for (student of data.students; track student._id) {
              <option [value]="student._id">{{ student.firstName }} {{ student.lastName }}</option>
            }
          </select>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-700">Start Date *</label>
            <input type="datetime-local" formControlName="startTime" class="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 w-full outline-none focus:ring-2 focus:ring-indigo-600">
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-700">End Date *</label>
            <input type="datetime-local" formControlName="endTime" class="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 w-full outline-none focus:ring-2 focus:ring-indigo-600">
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-700">Hours *</label>
            <input type="number" step="0.5" min="0" formControlName="spentHours" placeholder="0" class="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 w-full outline-none focus:ring-2 focus:ring-indigo-600">
          </div>
          <div class="flex flex-col gap-1">
            <label class="text-sm font-semibold text-slate-700">Session Type *</label>
            <select formControlName="timeType" class="h-12 px-4 rounded-xl border border-slate-200 bg-slate-50 w-full outline-none focus:ring-2 focus:ring-indigo-600">
              <option value="" disabled>Select type</option>
              @for (type of sessionTypes; track type) {
                <option [value]="type">{{ type }}</option>
              }
            </select>
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-sm font-semibold text-slate-700">Notes (Optional)</label>
          <textarea formControlName="comments" rows="4" placeholder="Describe what was discussed..." class="p-4 rounded-xl border border-slate-200 bg-slate-50 w-full outline-none focus:ring-2 focus:ring-indigo-600"></textarea>
        </div>

        <div class="flex justify-end gap-3 pt-4 border-t border-slate-100">
          <button type="button" mat-button mat-dialog-close class="!h-12 !rounded-xl !px-6 text-slate-600 bg-slate-50">Cancel</button>
          <button type="submit" mat-flat-button color="primary" [disabled]="form.invalid" class="!h-12 !rounded-xl !px-8 !bg-indigo-600">Log Time</button>
        </div>
      </form>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddTimeTrackDialogComponent {
  public data: { students: StudentInfo[] } = inject(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef);
  private fb = inject(FormBuilder);
  
  sessionTypes = SESSION_TYPES;

  form = this.fb.group({
    studentId: [''],
    startTime: ['', Validators.required],
    endTime: ['', Validators.required],
    spentHours: [null, [Validators.required, Validators.min(0)]],
    timeType: ['', Validators.required],
    comments: ['']
  });

  onSubmit() {
    if (this.form.valid) {
      // Find the full student object based on ID to match mock data structure
      const formValue = this.form.value;
      const studentObj = this.data.students?.find(s => s._id === formValue.studentId) || null;
      
      this.dialogRef.close({
        ...formValue,
        studentId: studentObj
      });
    }
  }
}