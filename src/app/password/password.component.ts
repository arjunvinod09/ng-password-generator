import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})

export class PasswordComponent {
  sliderValue: number = 8;
  includeUC: boolean = true;
  includeLC: boolean = true;
  includeN: boolean = true;
  includeS: boolean = true;
  password: string = "";
  strength: number = 0;
  strengthLevel: string = "VERY WEAK"

  generatePassword() {
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let charSet = '';
    if (this.includeUC) charSet += uppercaseChars;
    if (this.includeLC) charSet += lowercaseChars;
    if (this.includeN) charSet += numberChars;
    if (this.includeS) charSet += symbolChars;

    this.password = Array.from({ length: this.sliderValue })
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');

    this.calculateStrength();
  }

  calculateStrength() {
    const strengthValues = ["VERY WEAK" , "WEAK" , "AVERAGE" , "STRONG" , "VERY STRONG"]
    this.strength = 0;
    if (this.includeUC) this.strength++;
    if (this.includeLC) this.strength++;
    if (this.includeN) this.strength++;
    if (this.includeS) this.strength++;

    if (this.password.length >= 10) {
      this.strength++;
    }
    this.strengthLevel = strengthValues[this.strength-1]
    console.log(this.strengthLevel);
    console.log(this.strength);
  }

  copyPass(){
    alert(`Copied ${this.password} to the clipboard`)
  }
}