import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { UserMenu } from './user-menu/user-menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, UserMenu],
  templateUrl: './app.html',
})
export class App {}
