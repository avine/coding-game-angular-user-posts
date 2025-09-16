import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, EMPTY, switchMap } from 'rxjs';
import { UserPostItem } from './user-post-item/user-post-item';
import { UserPostsService } from './user-posts-service';

@Component({
  selector: 'app-user-posts',
  imports: [AsyncPipe, UserPostItem],
  templateUrl: './user-posts.html',
})
export class UserPosts {
  private activatedRoute = inject(ActivatedRoute);

  private userPostsService = inject(UserPostsService);

  private router = inject(Router);

  protected posts$ = this.activatedRoute.params.pipe(
    switchMap((params) =>
      this.userPostsService.fetch(params['userId']).pipe(
        catchError(() => {
          this.router.navigate(['/not-found']);
          return EMPTY;
        }),
      ),
    ),
  );
}
