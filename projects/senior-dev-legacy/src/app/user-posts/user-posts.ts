import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, map, switchMap } from 'rxjs';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPostsDto } from './user-post-types';

@Component({
  selector: 'app-user-posts',
  imports: [AsyncPipe, UserPostItem],
  templateUrl: './user-posts.html',
})
export class UserPosts {
  private activatedRoute = inject(ActivatedRoute);

  private httpClient = inject(HttpClient);

  private router = inject(Router);

  protected posts$ = this.activatedRoute.params.pipe(
    switchMap((params) =>
      this.httpClient
        .get<UserPostsDto>(`https://dummyjson.com/users/${params['userId']}/posts`)
        .pipe(
          map(({ posts }) => posts),
          catchError(() => {
            this.router.navigate(['/not-found']);
            return EMPTY;
          }),
        ),
    ),
  );
}
