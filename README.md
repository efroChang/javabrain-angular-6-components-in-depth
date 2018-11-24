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

### To generate a regular class:
`$ ng g class blog-post`