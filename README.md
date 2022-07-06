# hosting-a-website-on-github
## Project: Build a Personal Website

Link: https://justeddie.github.io/hosting-a-website-on-github/

(Last Updated:06/07/22)

### It Looks Like :
![website overview photo](/image/website-overview.PNG)


### Development Goal :
Using HTML, CSS and Github to build a website and host

### Skills :

#### hover effect
![intro hi messages with hover effect](/image/intro-hover.PNG)
* Those HI messages grow bigger and change color slowly with hover.
```
<div class="hi">
<h1 id="greeting">Hi, I'm Eddie!</h1>
<h1 id="greeting">Nice to meet you!</h1>
<h1 id="greeting">Welcome to my site!</h1>
</div>
```
```
.hi {
  color: rgb(203, 217, 248);
  font-family: "Lobster", cursive;
  padding: 30px 0;
}

.hi h1:hover {
  font-size: 60px;
  color: #24292f;
  transition: all 0.4s ease;
  -webkit-transition: all 0.8s ease;
}
```
![social network icons with hover effect](/image/contact-hover.PNG)
* Those social network icons connects to link
```
<a
    href="https://www.linkedin.com/in/yejin-na-918748233/"
    class="fa fa-linkedin"
></a>
<a
    href="https://www.instagram.com/eddie_yj/"
    class="fa fa-instagram"
></a>
<a 
    href="https://github.com/JustEddie" 
    class="fa fa-github">
</a>
>    ```
with hover effect of opacity: 0.7
```
.fa:hover {
  opacity: 0.7;
}
```
#### Responsive Web Design
* It looks like this on phone :
![website on phonescreen](/image/responsive-phone.PNG)
*used @media query
```
@media (max-width: 480px) {
  .wrapper {
    width: 100%;
    padding: 0;
  }
  .nav-left {
    font-size: 35px;
    position: inheit;
  }
  .nav-right span {
    display: none;
  }
  .nav-right {
    font-size: 15px;
    top: 3%;
    right: 2%;
    background-color: #f5f5f5;
    border-radius: 20px;
    position: fixed;
  }
  .nav-right a {
    display: block;
    font-size: 10px;
    padding: 10px;
  }
  .divHead {
    font-size: 20px;
  }
  .about .article {
    grid-template-columns: auto;
    row-gap: 5%;
    padding: 8% 8%;
  }
  .gallery {
    height: 500px;
  }
  div .galleryPhoto {
    width: 35%;
    height: 35%;
    margin: 10% 7%
  }
  div .galleryPhoto img {
    width: 100%;
    height: 70%;
  }
  div .description {
    padding: 0;
  }
}
```
### Advanced Feature :