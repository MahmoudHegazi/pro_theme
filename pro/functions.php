<?php


// Setup
define( 'JU_DEV_MODE', true );

// Include
include( get_theme_file_path( '/includes/front/enqueue.php') );


// Hooks
/* it tell wordpress listen to event wp_enqueue_script and do the function ju_enqueue*/
add_action( 'wp_enqueue_scripts', 'ju_enqueue' );
//add_action( 'widgets_init', 'ju_widgets' );
// for menu setup


// shortCodes
 ?>
