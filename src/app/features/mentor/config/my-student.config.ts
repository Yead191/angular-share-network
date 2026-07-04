import { Goal, Student, ClassSession, Event, Resource } from "../../../shared/types/student.types";

const myStudent: Student = {
    name: 'Emma Davis',
    role: 'Frontend Engineering Student',
    email: 'emma.davis@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA (PST)',
    joined: 'March 2026',
    avatar: 'https://ui-avatars.com/api/?name=Emma+Davis&background=6366f1&color=fff&size=128',
    banner: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000',
    traits: ['Visual Learner', 'Highly Interactive', 'Prefers Evening'] // Now dynamic!
};

const goals: Goal[] = [
    { title: 'Master Angular Signals', progress: 85, status: 'on-track' },
    { title: 'Build Full-stack E-commerce', progress: 40, status: 'on-track' },
    { title: 'Data Structures & Algos', progress: 15, status: 'at-risk' }
]


const schedule: ClassSession[] = [
    { topic: 'Advanced State Management', date: 'Jul 5, 2026', time: '10:00 AM', type: '1-on-1' },
    { topic: 'Code Review: Portfolio', date: 'Jul 8, 2026', time: '2:30 PM', type: '1-on-1' },
    { topic: 'Frontend System Design', date: 'Jul 12, 2026', time: '11:00 AM', type: 'Group' }
];

const resources: Resource[] = [
    { name: 'Angular Best Practices.pdf', type: 'pdf', dateAdded: '2 days ago' },
    { name: 'RxJS Operators Cheat Sheet', type: 'link', dateAdded: '1 week ago' },
    { name: 'Mentorship Session Recording', type: 'video', dateAdded: '2 weeks ago' }
]

const events: Event[] = [
    { title: 'Mock Interview Prep', date: 'Jul 10', description: 'Behavioral and technical prep.' },
    { title: 'Hackathon Kickoff', date: 'Jul 15', description: 'Internal platform hackathon.' }
]


export { myStudent, goals, schedule, resources, events };