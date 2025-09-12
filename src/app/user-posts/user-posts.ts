import { Component, input } from '@angular/core';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPost } from './user-post-types';

@Component({
  selector: 'app-user-posts',
  imports: [UserPostItem],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
})
export class UserPosts {
  posts = input<UserPost[]>();
}
