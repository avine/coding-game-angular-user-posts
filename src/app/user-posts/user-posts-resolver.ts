import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { UserPost } from './user-post-types';

export const userPostsResolver: ResolveFn<UserPost[]> = (route) => {
  const userId = route.params['userId'];

  const router = inject(Router);

  return inject(HttpClient)
    .get<{ posts: UserPost[] }>(`https://dummyjson.com/users/${userId}/posts`)
    .pipe(
      map(({ posts }) => posts),
      catchError(() => of(new RedirectCommand(router.parseUrl('/not-found')))),
    );
};
