import { Component, OnInit, ViewChildren } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { QueryList } from '@angular/core';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  blogPosts: Array<Array<BlogPost>> = [];
  currentPage: number;

  @ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;

  constructor(private blogDataService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;

    this.reloadBlobPosts();
  }

  updateCurrentPage( index: number ){
    this.currentPage = index;

    this.reloadBlobPosts();   // To reload the "Full Summary"
  }

  toggleExpanAllPosts() {
    this.blogPostTileComponents.forEach((blogPost) => {
      blogPost.toggleSummaryDisplay();
    })
  }

  private reloadBlobPosts() {
    this.blogPosts = this.blogDataService.getData();
  }
}
