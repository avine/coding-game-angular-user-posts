import { HttpClient } from '@angular/common/http';
import { Component, effect, inject, signal } from '@angular/core';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPost, UserPostsDto } from './user-post-types';

@Component({
  selector: 'app-user-posts',
  imports: [UserPostItem],
  templateUrl: './user-posts.html',
  styleUrl: './user-posts.scss',
})
export class UserPosts {
  private httpClient = inject(HttpClient);

  protected userId = signal<number | undefined>(undefined);

  protected posts = signal<UserPost[] | undefined>(undefined);

  constructor() {
    effect(() => {
      const userId = this.userId();
      if (!userId) {
        return;
      }
      this.httpClient
        .get<UserPostsDto>(`https://dummyjson.com/users/${userId}/posts`)
        .subscribe(({ posts }) => this.posts.set(posts));
    });
  }
}
