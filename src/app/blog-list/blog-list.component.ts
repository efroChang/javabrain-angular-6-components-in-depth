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
      new BlogPost('Blog Title 1', 'Cras nisi leo, volutpat in pharetra id, commodo scelerisque ligula. Etiam imperdiet est mi, vel pretium velit facilisis et. Etiam varius nibh erat, sit amet ornare sem maximus id. Etiam quis turpis tempor, porttitor enim hendrerit, accumsan odio. Maecenas egestas vel nisi ac varius. Nunc sed nulla molestie, placerat orci quis, dictum ex. Praesent neque urna, gravida eu neque at, elementum semper leo. Nullam euismod, lacus commodo interdum sagittis, ligula ipsum fermentum nisl, at porttitor metus enim vel tellus. Nunc at quam dapibus, gravida felis tempus, varius turpis. Etiam lacus mi, venenatis eu tortor eu, suscipit laoreet ligula. Morbi faucibus maximus arcu. Nam in lacus tortor. Phasellus interdum sagittis vestibulum.'),
      new BlogPost('Blog Title 2', 'Phasellus nibh nisi, mattis ut scelerisque ac, ullamcorper eget orci. In eleifend felis et arcu hendrerit, vestibulum pellentesque felis vehicula. Vestibulum gravida purus ac feugiat aliquet. Suspendisse cursus porta dui bibendum sollicitudin. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque ante augue, gravida ac aliquam eget, condimentum pellentesque erat. Quisque eu ipsum vestibulum, varius tellus sit amet, sagittis eros. Sed bibendum, sem eget mollis scelerisque, erat nulla venenatis velit, non sodales ante ante non nisi. Curabitur tincidunt tortor felis, vel suscipit enim ornare sit amet. Aliquam euismod porttitor turpis tempus congue. Proin felis quam, eleifend eget egestas in, blandit id orci.'),
      new BlogPost('Blog Title 3', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec metus quis turpis mollis dapibus. Morbi dignissim ex a est volutpat, eget tristique dolor imperdiet. Sed euismod eleifend nibh. Proin rutrum a est et aliquet. Nulla vulputate nisl urna, quis pellentesque lectus molestie a. Ut et nisi nec nibh congue malesuada posuere sodales mauris. Morbi sit amet ultricies risus. Integer in lectus volutpat orci aliquet semper sed non lectus. Morbi eget molestie nunc.'),
    ]
  }
}
