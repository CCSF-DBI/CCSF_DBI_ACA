<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>DBI</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

        <link rel="stylesheet" href="css/normalize.css">
        <link rel="stylesheet" href="css/main.css">
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" rel="stylesheet">
        <link href="/css/layout.css" rel="stylesheet">
        <script src="/js/lib/modernizr-2.6.2.min.js"></script>
        <!-- Mobile -->
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min.css" />
        <!--script src="//ajax.googleapis.com/ajax/libs/jquerymobile/1.4.3/jquery.mobile.min.js"></script-->
        <!-- jQuery UI -->
        <link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <!-- Add your site or application content here -->
<div id="main" class="container">

        <div id="mainAppRegion">
            <!-- TODO: Add a spinner here -->
        </div>


        <p>Hello world! This is HTML5 Boilerplate.</p>
        <jsp:include page="/WEB-INF/jsp/test.jsp"/>
      <h1>Search</h1>
      <label>Example for a simple search form.</label>

      <!-- Search form with input field and button -->
      <form class="well form-search">
        <input type="text" class="input-medium search-query">
        <button type="submit" class="btn btn-primary">Search</button>
      </form>

      <h2>Results</h2>

      <!-- Table with alternating cell background color and outer frame -->
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Lorem ipsum dolor ...</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ut enim ad minim veniam, ...</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Duis aute irure dolor ...</td>
          </tr>
        </tbody>
      </table>
    </div>
    <script src="/js/lib/require/require-v2.1.14.min.js"></script>
    <script type="text/javascript">
        require(['/js/app/config.js'], function (config) {
            require(['app/main']);
        });
    </script>
    <!--
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')</script>
        <script src="js/plugins.js"></script>
        <script src="js/main.js"></script>
        <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
    <!--
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-XXXXX-X');ga('send','pageview');
        </script>
      -->
    </body>
</html>
