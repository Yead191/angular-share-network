import { Routes } from "@angular/router";
import { DashboardLayout } from "../../core/layout/dashboard-layout/dashboard-layout";

export const MentorRoutes: Routes = [
    {
        path: "",
        component: DashboardLayout,
        children: [
            {
                path: "",
                redirectTo: "overview",
                pathMatch: "full"
            },
            {
                path: "overview",
                loadComponent: () => import("./pages/overview/overview.component").then(m => m.OverviewComponent)
            },
            {
                path: "my-student",
                loadComponent: () => import("./pages/my-student/my-student.component").then(m => m.MyStudentComponent)
            },
            {
                path: "time-tracking",
                loadComponent: () => import("./pages/time-tracking/time-tracking.component").then(m => m.TimeTrackingComponent) 
            }
        ]
    }
]