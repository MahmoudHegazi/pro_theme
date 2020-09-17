<?php

function ju_enqueue() {
  $uri                                 =  get_theme_file_uri();
  // this help us to keep update and not load files from cache
  // if developer mode on set ver to time so it will upload new version becuase time change
  // else set it to false to upload it normally from cashe
  $ver                                 =  JU_DEV_MODE ? time() : false;



  // wp_register_stye like variables set the value for something or like function declartion

  wp_register_style( 'ju_style', $uri . '/assets/css/custom-css.css', [], $ver  );


   wp_register_style( 'ju_bootstrap', 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css',
    [],
    $ver
  );
  wp_register_style( 'ju_google_mont', 'https://fonts.googleapis.com/css?family=Montserrat',
   [],
   $ver
 );
 wp_register_style( 'ju_google_lato', 'https://fonts.googleapis.com/css?family=Lato',
  [],
  $ver
);


  wp_enqueue_style ( 'ju_style' );
  wp_enqueue_style ( 'ju_bootstrap' );
  wp_enqueue_style ( 'ju_google_mont' );
  wp_enqueue_style ( 'ju_google_lato' );



  wp_register_script( 'ju_app', $uri . '/assets/js/app.js', [], $ver, true );
  wp_register_script( 'ju_bootstrap_js', $uri . 'https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js', [], $ver, true );


  wp_enqueue_script( 'ju_app' );
  wp_enqueue_script( 'jquery' );
  wp_enqueue_script( 'ju_bootstrap_js' );

}
?>
