import { inject } from '@angular/core';
import { RedirectCommand, ResolveFn, Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { UserPost } from './user-post-types';
import { UserPostsService } from './user-posts-service';

export const userPostsResolver: ResolveFn<UserPost[]> = (route) => {
  const userPostsService = inject(UserPostsService);

  const userId = route.params['userId'];

  const router = inject(Router);

  return userPostsService
    .fetch(userId)
    .pipe(catchError(() => of(new RedirectCommand(router.parseUrl('/not-found')))));
};
