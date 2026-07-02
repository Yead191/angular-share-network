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
        ]
    }
]