import { Component, inject, signal } from '@angular/core';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPostsService } from './user-posts-service';
import { UserPost } from './user-posts-types';

@Component({
  selector: 'app-user-posts',
  imports: [UserPostItem],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
})
export class UserPosts {
  userPostsService = inject(UserPostsService);

  userPosts = signal<UserPost[]>([]);

  fetch(id: number) {
    this.userPostsService.fetch(id).subscribe({ next: (u) => this.userPosts.set(u) });
  }
}
