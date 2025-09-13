import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserMenu } from './user-menu/user-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserMenu],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
