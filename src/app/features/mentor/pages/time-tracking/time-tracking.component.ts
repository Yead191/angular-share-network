import { CommonModule, DatePipe } from "@angular/common";
import { Component, ChangeDetectionStrategy, inject, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { assignedStudents, TimeTrack, timeTracking } from "../../config/time-tracking.config";
import { AddTimeTrackDialogComponent } from "./components/add-time-tracking.dialog.component";
import { EditTimeTrackDialogComponent } from "./components/edit-time-track-dialog.component";
import { ViewTimeTrackDialogComponent } from "./components/view-time-track-dialog.component";

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

openAddModal() {
const dialogRef = this.dialog.open(AddTimeTrackDialogComponent, {
    width: "600px",
    panelClass:"custom-dialog-container",
    data:{students: this.assignedStudent()}
})
dialogRef.afterClosed().subscribe((result)=>{
    if(result){
   this.timeTracking.update(tracks => [{ ...result, _id: Date.now().toString() }, ...tracks]);
        this.snackBar.open('Time track created successfully', 'Close', { duration: 3000 });
    }
})
}

openEditModal(student: TimeTrack) {
    const dialogRef = this.dialog.open(EditTimeTrackDialogComponent, {
      width: '600px',
      panelClass: "custom-dialog-container",
      data: { students: this.assignedStudent(), record: student }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.timeTracking.update(tracks =>
          tracks.map(t => (t._id === result._id ? result : t))
        );
        this.snackBar.open('Time track updated successfully', 'Close', { duration: 3000 });
      }
    });
  }

  deleteRecord(id: string) {
    if (confirm('Are you sure you want to delete this time track? This action cannot be undone.')) {
      this.timeTracking.update(tracks => tracks.filter(t => t._id !== id));
      this.snackBar.open('Time track deleted successfully', 'Close', { duration: 3000 });
    }
  }
  openViewModal(track:any){
 this.dialog.open(ViewTimeTrackDialogComponent, {
    width: "600px",
    panelClass:"custom-dialog-container",
    data: { record: track }
})
  }
}