import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { Session, Stat, stats, studentProgress, StudentProgress, upcomingSessions } from '../../config/overview.config';


@Component({
    selector: 'app-mentor-overview',
    standalone: true,
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        MatProgressBarModule,
        MatMenuModule
    ],
    templateUrl: './overview.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverviewComponent {
    // Mock Data using Signals
    mentorName = signal('Sarah');

    stats = signal<Stat[]>(stats);

    upcomingSessions = signal<Session[]>(upcomingSessions);

    studentProgress = signal<StudentProgress[]>(studentProgress);

    joinSession(sessionId: string) {
        console.log(`Joining session ${sessionId}...`);
        // Routing logic to video call room
    }
}