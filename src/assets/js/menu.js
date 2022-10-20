$(document).ready(function){
    $('#mainNav li:has(ul) > a').append('<span>&#9660;</span>');
    $('#mainNav li:has(ul)').hover(function(){
        $('ul', this).stop(true, true).slideToggle();
    }); 
    $('#menuToggle').click(function(){
        $('#mainNav').stop(true, true).slideToggle();
    });}
