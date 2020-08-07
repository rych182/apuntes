<?php

function gymfitness_menu(){
    register_nav_menus(array(
        //Lo que lee Wordpress| Lo que se va a mostrar en pantalla al usuario | Text Domain (viene en el CSS)
        'menu-principal' => __('Menu principal', 'gymfitness')
    ));
}

add_action('init', 'gymfitness_menu');