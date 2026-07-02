export interface NavItem {
    label: string;
    path: string;
    icon: string;
}

export const MENTOR_MENU: NavItem[] = [
    { label: 'Overview', path: 'overview', icon: 'dashboard' },
    { label: 'Students', path: 'students', icon: 'groups' },
    { label: 'Time Tracking', path: 'time-tracking', icon: 'schedule' },
    { label: 'Schedule', path: 'schedule', icon: 'calendar_month' },
    { label: 'Resources', path: 'resources', icon: 'folder_open' },
    { label: 'Profile', path: 'profile', icon: 'person' },
];

export const STUDENT_MENU: NavItem[] = [
    { label: 'Overview', path: 'overview', icon: 'dashboard' },
    { label: 'My Mentor', path: 'mentor', icon: 'school' },
    { label: 'Classes', path: 'classes', icon: 'cast_for_education' },
    { label: 'Resources', path: 'resources', icon: 'folder_open' },
    { label: 'Events', path: 'events', icon: 'event' },
    { label: 'My Profile', path: 'profile', icon: 'person' },
];