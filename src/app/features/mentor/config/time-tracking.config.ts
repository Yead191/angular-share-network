export interface StudentInfo {
    _id: string;
    firstName: string;
    lastName: string;
}

export interface TimeTrack {
    _id: string;
    timeType: string;
    studentId: StudentInfo;
    startTime: string;
    endTime: string;
    spentHours: number;
    comments: string;
}

const assignedStudents: StudentInfo[] = [
    { _id: 's1', firstName: 'Emma', lastName: 'Davis' },
    { _id: 's2', firstName: 'Liam', lastName: 'Chen' }
]

const timeTracking: TimeTrack[] = [
    {
        _id: '1',
        timeType: '1-on-1 Session',
        studentId: { _id: 's1', firstName: 'Emma', lastName: 'Davis' },
        startTime: '2026-07-04T10:00:00Z',
        endTime: '2026-07-04T11:00:00Z',
        spentHours: 1,
        comments: 'Discussed advanced Angular architecture and Signals.'
    }
]

export { assignedStudents, timeTracking }