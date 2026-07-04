import { Injectable, signal } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class LayoutService {
    isMobileMenuOpen = signal<boolean>(false);
    currentRole = signal<string>('mentor'); // student, mentor, admin
    toggleMobileMenu(): void {
        this.isMobileMenuOpen.update((value) => !value);
    }
    closeMobileMenu(): void {
        this.isMobileMenuOpen.set(false)
    }
    setRole(role: "student" | "mentor"): void {
        this.currentRole.set(role);
    }
}