import { Component, input, signal } from '@angular/core';
import { UserPost } from '../user-post-types';

@Component({
  selector: 'app-user-post-item',
  templateUrl: './user-post-item.html',
  styleUrl: './user-post-item.scss',
})
export class UserPostItem {
  index = input<number>();

  post = input.required<UserPost>();

  protected showBody = signal(false);

  protected toggleBody() {
    this.showBody.update((showBody) => !showBody);
  }
}
