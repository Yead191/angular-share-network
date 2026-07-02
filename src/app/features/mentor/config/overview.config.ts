// Interfaces for our strictly typed data
export interface Stat {
    label: string;
    value: string | number;
    trend: number; // positive or negative percentage
    icon: string;
    colorClass: string;
}

export interface Session {
    id: string;
    studentName: string;
    topic: string;
    time: string;
    avatar: string;
    status: 'upcoming' | 'live';
}

export interface StudentProgress {
    name: string;
    course: string;
    completion: number;
    avatar: string;
}


export const stats: Stat[] = [
    { label: 'Active Students', value: 24, trend: 12, icon: 'groups', colorClass: 'text-indigo-600 bg-indigo-100' },
    { label: 'Hours Mentored', value: '1,240', trend: 8, icon: 'schedule', colorClass: 'text-emerald-600 bg-emerald-100' },
    { label: 'Avg. Rating', value: '4.9', trend: 2, icon: 'star', colorClass: 'text-amber-600 bg-amber-100' },
    { label: 'Upcoming Classes', value: 6, trend: -5, icon: 'event', colorClass: 'text-purple-600 bg-purple-100' }
];

export const upcomingSessions: Session[] = [
    { id: '1', studentName: 'Alex Johnson', topic: 'Advanced Angular Architecture', time: 'Today, 10:00 AM', avatar: 'https://ui-avatars.com/api/?name=Alex+Johnson&background=random', status: 'live' },
    { id: '2', studentName: 'Maria Garcia', topic: 'RxJS & Signals Transition', time: 'Today, 2:30 PM', avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=random', status: 'upcoming' },
    { id: '3', studentName: 'James Wilson', topic: 'Portfolio Review', time: 'Tomorrow, 11:00 AM', avatar: 'https://ui-avatars.com/api/?name=James+Wilson&background=random', status: 'upcoming' }
];

export const studentProgress: StudentProgress[] = [
    { name: 'Emma Davis', course: 'Frontend Mastery', completion: 85, avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=random' },
    { name: 'Liam Chen', course: 'Fullstack Bootcamp', completion: 42, avatar: 'https://ui-avatars.com/api/?name=Liam+Chen&background=random' },
    { name: 'Sophia Patel', course: 'UI/UX Fundamentals', completion: 67, avatar: 'https://ui-avatars.com/api/?name=Sophia+Patel&background=random' },
];