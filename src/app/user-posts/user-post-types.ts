export interface UserPost {
  id: number;
  title: string;
  body: string;
}

export interface UserPostsDto {
  posts: UserPost[];
}
