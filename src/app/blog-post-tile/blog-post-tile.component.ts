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
  fullSummary: string;
  fullSummaryShown: boolean = false;

  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary = this.blogPost.summary;
    this.truncateSummary();   // Truncate by default
  }

  toggleSummaryDisplay() {
    if (this.fullSummaryShown) {
      this.truncateSummary();
    } else {
      this.showFullSummary();
    }

    this.fullSummaryShown = !this.fullSummaryShown;
  }

  private truncateSummary() {
    this.blogPost.summary = this.truncatePipe.transform(this.blogPost.summary, [250]);
  }

  private showFullSummary() {
    this.blogPost.summary = this.fullSummary;
  }
}
