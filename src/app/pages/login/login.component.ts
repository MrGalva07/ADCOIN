import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigate(['/saiba-mais']);
    } else {
      alert('Invalid credentials');
    }
  }
}

