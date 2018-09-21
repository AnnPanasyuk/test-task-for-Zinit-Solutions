$('.fade').slick({
    dots: true,
    arrows: true,
    nextArrow: "<div class='slick-next'><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t viewBox=\"0 0 477.175 477.175\" width=\"65px\" height=\"90px\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<path d=\"M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5\n" +
    "\t\tc-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z\n" +
    "\t\t\"/>\n" +
    "</g>\n</svg></div>",
    prevArrow: "<div class='slick-prev'><svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t viewBox=\"0 0 477.175 477.175\" width=\"65px\" height=\"90px\" style=\"enable-background:new 0 0 477.175 477.175;\" xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<path d=\"M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225\n" +
    "\t\tc2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z\"/>\n" +
    "</g>\n</svg></div>",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
var slider = $(".slider");
var newsBlock = $(".latest-news");
var offsetSlider = slider.offset();
var offsetNewsBlock = newsBlock.offset();
var mainOffset = offsetSlider.top + (slider.height() / 2);
var newsBlockOffset = offsetNewsBlock.top;
console.log("offsetSlider " + mainOffset);
console.log("newsBlockOffset " + newsBlockOffset);

$(document).ready(function(){
    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
    });
});
$('#nav-icon3').on('click',function(){
    if($('nav').is(":visible")){
        $('nav').hide();
    }
    else $('nav').show();
});
$(window).on('load', function(){

});


$(window).resize(function(){

});

$(window).scroll(function(){
    var windowScrollTop = $(this).scrollTop();

    if(windowScrollTop > mainOffset && windowScrollTop < newsBlockOffset){
        console.log(">");
        $('.latest-news figure:nth-child(1), .latest-news figure:nth-child(2)').removeClass("hidden");
        $('.latest-news figure:nth-child(1), .latest-news figure:nth-child(2)').addClass("visible");
    } else if(windowScrollTop > newsBlockOffset) {
        $('.latest-news figure:nth-child(1), .latest-news figure:nth-child(2), .latest-news figure:nth-child(3), .latest-news figure:nth-child(4)').removeClass("hidden");
        $('.latest-news figure:nth-child(1), .latest-news figure:nth-child(2), .latest-news figure:nth-child(3), .latest-news figure:nth-child(4)').addClass("visible");
        console.log('news >');
    } else {
        console.log("<");
        $('.latest-news figure').removeClass("visible");
        $('.latest-news figure').addClass("hidden");
    }
});