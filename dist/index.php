<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Steve Kensington - Front End Web Developer and UI Designer</title>
    <meta name="description" content="Front end web developer and UI designer.">
    <meta name="keywords" content="Front End Web Developer,UI Developer,UI Design,HTML5,CSS3,Sass,BEM,JavaScript">
    <meta name="author" content="Steve Kensington">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#61146e">
    <meta name="msapplication-TileColor" content="#61146e">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="css/main.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800' rel='stylesheet' type='text/css'>
    <script type="text/javascript" src="js/main.js" async></script>
  </head>
  <body>
    <?php include("includes/_header.php");?>
    <div class="parralax parralax--home1">
      <div class="logo logo--parralax">
        <span class="logo__surround">Steven Kensington</span>
      </div>
    </div>
    <section class="section section--light section--large-text">
      <h1>Hello ;)</h1>
      <div class="photo"><img class="photo__img" src="images/me.jpg" alt="Yep, this is me. Please don't let it put you off ;)"></div>
      <p>I'm Steve, a Front End Web Developer and Designer with over 20 years commercial experience, and a passion for applying responsive design principles and writing clean code to create first class user interfaces. I'm an accomplished all rounder with excellent attention to detail and problem solving skills.</p>
    </section>
    <div class="parralax parralax--home2">
      <div class="logo logo--parralax">
        <span class="logo__surround">SK</span>
      </div>
    </div>
    <section class="section section--dark">
      <h2>What I enjoy</h2>
      <div class="flex">
        <div class="flex__2-col">
          <h3>Front End Development</h3>
          <div class="section__centered-image-container"><img src="images/icon-code.svg" class="section__centered-image section__centered-image--icon" alt="Front End Development"></div>
          <p>I enjoy hand coding and bringing designs to life using these technologies.</p>
          <p>HTML5, CSS3, Sass, BEM, Gulp, JavaScript</p>
        </div>
        <div class="flex__2-col">
          <h3>UI Design</h3>
          <div class="section__centered-image-container"><img src="images/icon-design.svg" class="section__centered-image section__centered-image--icon" alt="UI Design"></div>
          <p>I have a wide range of experience designing for web, mobile, and other media.</p>
          <p>UI, Web, Mobile, Apps, Print Media</p>
        </div>
      </div>
    </section>
    <section class="section section--light">
      <h2>Fancy a Chat?</h2>
      <p>I'm always happy to talk to like minded people, if you want to say hello just...</p>
      <a href="contact.php" class="button button--theme-color button--top-margin">Get in touch</a>
    </section>
    <?php include("includes/_footer.php");?>
  </body>
</html>
