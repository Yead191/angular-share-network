import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, signal } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { Router, RouterModule } from "@angular/router";

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,

    ],
    templateUrl: './login.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {
    private fb = inject(FormBuilder)
    private router = inject(Router)
    // Using signals for UI state
    hidePassword = signal<boolean>(true)
    isSubmitting = signal<boolean>(false)
    togglePasswordVisibility = signal(false)
    loginForm = this.fb.nonNullable.group({
        email: ["", Validators.required, Validators.email],
        password: ["", Validators.required],
        rememberMe: [false]
    })

    onSubmit() {
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return
        };
        this.isSubmitting.set(true)
        setTimeout(() => {
            this.isSubmitting.set(false)
            this.router.navigate(['/mentor/overview'])
        }, 1500)
    }

}