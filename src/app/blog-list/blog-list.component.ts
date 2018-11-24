import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: Array<BlogPost> = [];

  constructor() { }

  ngOnInit() {
    this.blogPosts = [
      new BlogPost('Blog Title 1', 'Summary 1'),
      new BlogPost('Blog Title 2', 'Summary 2'),
      new BlogPost('Blog Title 3', 'Summary 3'),
    ]
  }
}
