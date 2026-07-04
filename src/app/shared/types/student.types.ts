interface Student {
    id?: string;
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    joined: string;
    avatar: string;
    banner: string;
    traits?: string[]; // E.g., ['Visual Learner', 'Highly Interactive']
}

interface Goal { title: string; progress: number; status: 'on-track' | 'at-risk' | 'completed'; }
export interface ClassSession { topic: string; date: string; time: string; type: '1-on-1' | 'Group'; }
interface Resource { name: string; type: 'pdf' | 'video' | 'link'; dateAdded: string; }
interface Event { title: string; date: string; description: string; }

export type { Student, Goal, Resource, Event }