import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TimeTrack } from '../../../config/time-tracking.config';

@Component({
  selector: 'app-view-time-track-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  template: `
    <div class="p-6 md:p-8 bg-white rounded-3xl relative">
      <button mat-icon-button mat-dialog-close class="absolute top-4 right-4 text-slate-400">
        <mat-icon>close</mat-icon>
      </button>

      <div class="flex items-center gap-3 mb-6">
        <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600">
          <mat-icon>visibility</mat-icon>
        </div>
        <h2 class="text-2xl font-bold text-slate-900 m-0">View Time Track</h2>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Student</p>
          <p class="text-slate-800 font-medium">
            {{ data.record.studentId ? data.record.studentId.firstName + ' ' + data.record.studentId.lastName : 'N/A' }}
          </p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Session Type</p>
          <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">{{ data.record.timeType }}</span>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Start Time</p>
          <p class="text-slate-800 font-medium">{{ data.record.startTime | date:'MMM dd, yyyy hh:mm a' }}</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">End Time</p>
          <p class="text-slate-800 font-medium">{{ data.record.endTime | date:'MMM dd, yyyy hh:mm a' }}</p>
        </div>
        <div>
          <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-1">Spent Hours</p>
          <p class="text-slate-800 font-medium text-lg">{{ data.record.spentHours }} <span class="text-sm text-slate-500">hrs</span></p>
        </div>
      </div>
      
      <div class="mt-8">
        <p class="text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Comments</p>
        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 min-h-[100px]">
          <p class="text-slate-700 whitespace-pre-wrap">{{ data.record.comments || 'No comments provided.' }}</p>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewTimeTrackDialogComponent {
  public data: { record: TimeTrack } = inject(MAT_DIALOG_DATA);
}