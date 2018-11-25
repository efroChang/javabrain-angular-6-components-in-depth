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