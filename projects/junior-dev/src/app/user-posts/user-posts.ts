import { Component, effect, inject, signal } from '@angular/core';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPost } from './user-post-types';
import { UserPostsService } from './user-posts-service';

@Component({
  selector: 'app-user-posts',
  imports: [UserPostItem],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
})
export class UserPosts {
  private userPostsService = inject(UserPostsService);

  protected userId = signal<number | undefined>(undefined);

  protected posts = signal<UserPost[] | undefined>(undefined);

  constructor() {
    effect(() => {
      const userId = this.userId();
      if (!userId) {
        return;
      }
      this.userPostsService.fetch(userId).subscribe((posts) => this.posts.set(posts));
    });
  }
}
