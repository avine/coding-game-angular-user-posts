import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Layout } from './layout/layout';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Layout, Menu],
  templateUrl: './app.html',
})
export class App {}
