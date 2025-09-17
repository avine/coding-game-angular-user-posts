import { Component, input } from '@angular/core';
import { UserPost } from '../user-posts-types';

@Component({
  selector: 'app-user-post-item',
  imports: [],
  templateUrl: './user-post-item.html',
  styleUrl: './user-post-item.scss',
})
export class UserPostItem {
  post = input.required<UserPost>();
}
