import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  nome: string = '';
  email: string = '';
  password: string = '';
  cpf: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.email === 'user@example.com' && this.password === 'password') {
      this.router.navigate(['/saiba-mais']);
    } else {
      alert('Invalid credentials');
    }
  }
}

