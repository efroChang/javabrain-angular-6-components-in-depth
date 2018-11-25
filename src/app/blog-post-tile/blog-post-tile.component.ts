import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss']
})
export class BlogPostTileComponent implements OnInit {

  @Input() blogPost: BlogPost;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.blogPost.summary = this.truncatePipe.transform(this.blogPost.summary, [250]);
  }
}
