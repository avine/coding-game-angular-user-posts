import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserPostsDto } from './user-posts-types';

@Injectable({
  providedIn: 'root',
})
export class UserPostsService {
  private httpClient = inject(HttpClient);

  fetch(userId: number | string) {
    return this.httpClient
      .get<UserPostsDto>(`https://dummyjson.com/users/${userId}/posts`)
      .pipe(map((userPostsDto) => userPostsDto.posts));
  }
}
