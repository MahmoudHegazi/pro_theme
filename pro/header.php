<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Pro Theme Made By Mahmoud Hegazy and w3schools -->
  <title>Landing Page Project</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body id="myPage" data-spy="scroll" style="background-color:gold;" data-target=".navbar" data-offset="60">


<!-- back_to_top_button -->


<button class="the_button" id="topbtn" onclick="app.back_top()">ToP</button>

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#myPage">Logo</a>
    </div>
    <div class="collapse navbar-collapse" id="myNavbar">

      <ul id="the_ul" class="nav navbar-nav navbar-right">

      </ul>

    </div>
  </div>
</nav>



<div class="jumbotron text-center">
  <h1>Company</h1>
  <p >We specialize in blablabla</p>
  <form>
    <div class="input-group">
      <input type="email" class="form-control" size="50" placeholder="Email Address" required>
      <div class="input-group-btn">
        <button type="button" class="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>
