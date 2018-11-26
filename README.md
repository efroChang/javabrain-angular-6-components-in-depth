# Components In Depth

## [KEY] To create this project, and use SCSS instead of CSS:
`$ ng new components-indepth --style=scss`

## [KEY] To install Bootstrap
### 1. Go to Bootstrap web site
http://getbootstrap.com/

### 2. Copy the CDN link url:
`<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">`

### 3. Paste the link url into index.html 
```
<header>
    ...
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</header>
```

## To generate a regular class:
`$ ng g class blog-post`

## To turn off View Encapsulation:
* It means the SCSS style will be shared across components.

Add `encapsulation: ViewEncapsulation.None` into @Component() like:
```
@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
  encapsulation: ViewEncapsulation.None
})
```

## To style the parent component:
### 1. Turn on ViewEncapsulation
Remove `encapsulation: ViewEncapsulation.None`

### 2. In Child SCSS file, use ":host" like:
```
:host {
    margin: 20px;
}
```
## [KEY] Parent Component to access Children Components methods:
### 1. In the parent template, give the *ngFor element a name
```
<app-blog-post-tile 
  #tile
  *ngFor="let post of blogPosts[currentPage]" 
  [blogPost]="post">
</app-blog-post-tile>
```

### 2a. In the parent component, use @ViewChildren() to get a QueryList<>:
`@ViewChildren('tile') blogPostTileComponents: QueryList<BlogPostTileComponent>;`

### 2b. If there is only one child component, use @ViewChild() instead.
`@ViewChild('tile') blogPostTileComponent: BlogPostTileComponent;`

### 3. In the parent component, loop through each child components:
```
  toggleExpanAllPosts() {
    this.blogPostTileComponents.forEach((blogPost) => {
      blogPost.toggleSummaryDisplay();
    })
  }
```

## Use "ngClass" to conditionally apply styles:
`[ngClass] = "{ 'favorite': blogPost.isFavorite }"`
* `'favorite'` is the CSS style name
* `blogPost.isFavorite` is the true/false to apply the style

## To generate custon Directive:
`$ ng generate directive highlight`

## To use the custom Directive in the template:
```
<h5 class="card-title" appHightlight>{{ blogPost.title }}</h5>
```
* `appHightlight` is the custom Directive.

## [KEY] To inject the Element into the Directive:
* Use `ElementRef`:
```
import { Directive, ElementRef } from '@angular/core';
export class HightlightDirective {

  constructor(private element: ElementRef) { }
}
```

## [KEY] Use "HostListener" in Directive:
```
@HostListener('mouseenter')
addHighlight() {
    this.element.nativeElement.style.backgroundColor = 'yellow';
}

@HostListener('mouseleave')
removeHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
}
```