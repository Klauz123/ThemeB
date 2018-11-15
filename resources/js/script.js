// Cookie
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function n(e){return a.raw?e:decodeURIComponent(e)}function o(e){return t(a.json?JSON.stringify(e):String(e))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(s," ")),a.json?JSON.parse(e):e}catch(t){}}function c(t,n){var o=a.raw?t:i(t);return e.isFunction(n)?n(o):o}var s=/\+/g,a=e.cookie=function(i,s,r){if(void 0!==s&&!e.isFunction(s)){if(r=e.extend({},a.defaults,r),"number"==typeof r.expires){var p=r.expires,d=r.expires=new Date;d.setTime(+d+864e5*p)}return document.cookie=[t(i),"=",o(s),r.expires?"; expires="+r.expires.toUTCString():"",r.path?"; path="+r.path:"",r.domain?"; domain="+r.domain:"",r.secure?"; secure":""].join("")}for(var u=i?void 0:{},f=document.cookie?document.cookie.split("; "):[],m=0,h=f.length;h>m;m++){var l=f[m].split("="),k=n(l.shift()),x=l.join("=");if(i&&i===k){u=c(x,s);break}i||void 0===(x=c(x))||(u[k]=x)}return u};a.defaults={},e.removeCookie=function(t,n){return void 0===e.cookie(t)?!1:(e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t))}}),function(e,t,n){function o(t,n){this.element=t,this.options=e.extend({},c,n),this._defaults=c,this._name=i,this.init()}var i="bycookies",c={message:"<p>Diese Website verwendet Cookies. Wenn Sie diese Website weiterhin nutzen, stimmen Sie der Verwendung von Cookies zu. </p>",acceptButton:!0,acceptButtonText:"Ich stimme zu",declineButton:!1,moreInfoLink:!0,moreInfoText:"Mehr erfahren",moreInfoUrl:"/privacy-policy",easing:"swing",animationSpeed:500,cookieDefaults:{expires:30,path:"/"}};o.prototype={init:function(){$cookiesAccepted="cookies_accepted"===e.cookie(this._name),$cookiesDeclined="cookies_declined"===e.cookie(this._name),($cookiesDeclined||!$cookiesAccepted)&&($container=e("<div/>").addClass(this._name+"-container"),$container.append(this.options.message),this.options.moreInfoLink&&this.moreInfoLink($container),this.options.acceptButton&&this.acceptButton($container),this.options.declineButton&&this.declineButton($container),e(this.element).append($container),$container.animate({bottom:0},this.options.animationSpeed,this.options.easing))},acceptButton:function(t){var n=e(this).get(0);t.append(e("<a/>").addClass("accept-cookies").text(n.options.acceptButtonText).attr("title",n.options.acceptButtonText)),t.on("click",".accept-cookies",function(o){o.preventDefault(),e.removeCookie(n._name),e.cookie(n._name,"cookies_accepted",n.options.cookieDefaults),t.animate({bottom:-t.innerHeight()},n.options.animationSpeed,n.options.easing)})},declineButton:function(t){var n=e(this).get(0);t.append(e("<a/>").addClass("decline-cookies").text(n.options.declineButtonText).attr("title",n.options.declineButtonText)),t.on("click",".decline-cookies",function(o){o.preventDefault(),e.removeCookie(n._name),e.cookie(n._name,"cookies_declined",n.options.cookieDefaults),t.animate({bottom:-t.innerHeight()},n.options.animationSpeed,n.options.easing)})},moreInfoLink:function(t){var n=e(this).get(0);t.append(e("<a/>").addClass("more-info").text(n.options.moreInfoText).attr("href",n.options.moreInfoUrl))}},e.fn[i]=function(t){return this.each(function(){e.data(this,"plugin_"+i)||e.data(this,"plugin_"+i,new o(this,t))})}}(jQuery,this);
//Suche
$(document).on('click','.icon-search',function(){
var content = $(this).closest('.wrapper-main').find('.search-control');
if( content.length > 0 ){content.addClass('open');return false;}})
$(document).on('click','.close-search-control',function(){
  $(this).closest('.wrapper-main').find('.search-control').removeClass('open');
})
//  Sticky Menu
$(window).scroll(function(){
var sticky = $('.sticky'),
scroll = $(window).scrollTop();
if (scroll >= 200) sticky.addClass('fixed');
else sticky.removeClass('fixed');
});
//Item Slider
$(document).ready(function() {
$('.slide-items').owlCarousel({
items: 6,
responsive:{
0:{items:1},
450:{items:2},
768:{items:3},
1024:{items:4},
1400:{items:5},
1600:{items:6},
},
lazyLoad: false,
dots: false,
loop: true,
margin:10,
nav: true,
navClass         : ["owl-single-item-nav left carousel-control","owl-single-item-nav right carousel-control"],
navContainerClass: "",
navText: ["<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"],
onTranslated: function(event)
{
  var target = $(event.currentTarget);
  var owlItem = $(target.find(".owl-item.active"));
  owlItem.find(".img-fluid.lazy").show().lazyload({threshold : 100});
}
});
$('.brand-slider').owlCarousel({
items: 8,
responsive:{
0:{items:1},
450:{items:2},
768:{items:4},
1024:{items:5},
1400:{items:6},
1600:{items:8},
},
dots:false,
lazyLoad: true,
loop: true,
margin:10,
nav: true,
navClass: ["owl-single-item-nav left carousel-control","owl-single-item-nav right carousel-control"],
navContainerClass: "",
navText: ["<i class=\"owl-single-item-control fa fa-chevron-left\" aria-hidden=\"true\"></i>","<i class=\"owl-single-item-control fa fa-chevron-right\" aria-hidden=\"true\"></i>"],
});
//  Accordion
  if ($('.accordion')[0]) {
    $('.accordion-title').on('click', function() {
      if ($(window).width() < 768) {$(this).next().toggle().prev().toggleClass('actives');return false;};
    });
  }
//  FilterAccordion
  if ($('.FilterAccordion')[0]) {
    $('.FilterTitle').on('click', function() {
      $(this).next().toggle().prev().toggleClass('actives');return false;
    });
  }
//  Menu
$('#mobilemenubutton').bind('click', function() {
var hoverClass  = 'hover' ;
var clickedIcon = $(this);
var openMenu    = $(this).attr('rel');
var openMenuID  = $(this).attr('id');
var otherMenu   = $('.nav:not([rel='+openMenu+'])').attr('rel');
var otherIcon   = $('.nav').not('#'+openMenuID);
if ( $('div#'+otherMenu).is(':visible') ) {$(otherIcon).removeClass(hoverClass);$('div#'+otherMenu).stop().slideUp('medium');}
if( $(clickedIcon).hasClass(hoverClass)){$('div#'+openMenu).stop().slideUp('medium');$(clickedIcon).removeClass(hoverClass);}
else {$('div#'+openMenu).stop().slideDown('medium');$(clickedIcon).addClass(hoverClass);}
});
$('#mobilefilterbutton').bind('click', function() {
var hoverClass  = 'hover' ;
var clickedIcon = $(this);
var openMenu    = $(this).attr('rel');
var openMenuID  = $(this).attr('id');
var otherMenu   = $('.nav:not([rel='+openMenu+'])').attr('rel');
var otherIcon   = $('.nav').not('#'+openMenuID);
if ( $('div#'+otherMenu).is(':visible') ) {$(otherIcon).removeClass(hoverClass);$('div#'+otherMenu).stop().slideUp('medium');}
if( $(clickedIcon).hasClass(hoverClass)){$('div#'+openMenu).stop().slideUp('medium');$(clickedIcon).removeClass(hoverClass);}
else {$('div#'+openMenu).stop().slideDown('medium');$(clickedIcon).addClass(hoverClass);}
});
// Cookie
$('body').bycookies({
  message: "Diese Website verwendet Cookies. Wenn Sie diese Website weiterhin nutzen, stimmen Sie der Verwendung von Cookies zu. ",
  acceptButton: true,
  acceptButtonText: "Ich stimme zu",
  declineButton: false,
  moreInfoLink: true,
  moreInfoText: "Mehr erfahren",
  moreInfoUrl: "/privacy-policy",
  easing: "swing",
  animationSpeed: 500,
  cookieDefaults: {
    expires: 30,
    path: '/'
  }
});
});
