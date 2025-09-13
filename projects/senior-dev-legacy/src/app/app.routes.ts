import { Routes } from '@angular/router';
import { Home } from './home/home';
import { UserPosts } from './user-posts/user-posts';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
    title: 'Home',
  },
  {
    path: 'posts/:userId',
    component: UserPosts,
    title: 'User posts',
  },
  {
    title: 'Not found',
    path: 'not-found',
    loadComponent: () => import('./not-found/not-found'),
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];
