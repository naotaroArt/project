import { Component, inject, NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { User } from './user.model';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [InputTextModule, ButtonModule, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService)
  
  form: FormGroup<{email: FormControl, password: FormControl}> = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  onSubmit() { 
    if(this.form.valid) {  
      const userData: User = this.form.value as User;
      this.authService.login(userData).subscribe({
        next: (response) => console.log('Успех:', response),
        error: (err) => console.error('Ошибка при отправке:', err),
     });
      console.log(this.form.value);
    }
  }
}
