 var pageeapp = $('.pagee-plataforma').length;
var timerpage = 0;

$('#bypagee').remove();
function bypagee(){
    
    if(pageeapp < 1){
   var bypageelink =  $('#bypagee').length;
        if(bypageelink < 1){ $('body').append('<a href="https://pagee.b-cdn.net/home.html" id="bypagee" target="_blank"></a>');}
    }
}





////////////url

  var parameterlinkact = $('#body').hasClass('parameterlinkurl'); 
    setTimeout(() => {
        
if(pageeapp < 1){  
          
      
        if(parameterlinkact){
      var links = document.getElementsByTagName("a");
        for (var i = 0, n = links.length; i < n; i++) {
            var href = links[i].href.trim() +
                    (links[i].href.indexOf("?") > 0 ? '&' : '?') +
                    document.location.search.replace('?', '').toString();
            links[i].href = href;
        } 
    }     
 }   
            
      
}, 1000);



   function getUrlParameter(name) {
       
    if(pageeapp < 1){    
       if(parameterlinkact){ 
       
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        
    }}
}



///////fim url


    setTimeout(function() { 
allpagecodeinject();
          }, 2000);   


function allpagecodeinject(){
    
    var platf = $('.pagee-plataforma').length;
if(platf < 1){
    $('body').append('<div id="allcodeonpage"></div>');
    $('#allcodeonpage').load('pagescode.txt');
   
    
    
}
    
    
}
  

if(pageeapp>0){
    
  $('#body, .page-center *').scroll(function() {
videofloat();
     reveal();
    });
}


$(window).scroll(function() {
videofloat();
     reveal();
    });




setInterval(function () {

   countdown(); 
    pageeaudioplayer();

},400);

setInterval(function () {
  if(  $('.page-edite').length ){timerpage = 0;}
    else{  timerpage = timerpage +1;}
    

  
 delayelement();
 bypagee();

}, 1000);







setInterval(function () {
    if(  $('.page-edite').length == false ){
    

        
        
        
        dynamictextname('.dynamic-text-refresh5s');
        dynamictextwords('.dynamic-text-refresh5s');
         dynamictextnumber('.dynamic-text-refresh5s');
    }
    
    


}, 5000);



setInterval(function () {
    if(  $('.page-edite').length == false ){
    
     dynamictextname('.dynamic-text-refresh10s');
         dynamictextwords('.dynamic-text-refresh10s');
            dynamictextnumber('.dynamic-text-refresh10s');
    }
    
    

 
}, 10000);


setInterval(function () {
    if(  $('.page-edite').length == false ){
    
     dynamictextname('.dynamic-text-refresh30s');
         dynamictextwords('.dynamic-text-refresh30s');
            dynamictextnumber('.dynamic-text-refresh30s');
    }
    
    

 
}, 30000);
















$( window ).resize(function() {
	if($('body:not(.no-at-loop)').length){
dropmenu(); 
    elem3d() ;
	borderRadius();
		
	}
});



//function videocrrect() {
//$( ".video iframe" ).each( function(  ) {  
//
////     $(this).toggleClass('videocorrect');
//
//   
//  });
//}


function borderRadius(atack) {
	console.log(atack);
	if(atack == undefined){atack =  $(".border-radius-per[data-border-radius]"); }
	
	
	
	
	   $( atack ).each( function(  ) {  
var val = $(this).attr('data-border-radius');
var wid  = $(this).width();
		  var childwid =  $(this).children('.subobj').width();
		   
		   var radius = (wid/100)*val;
		   var childradius = (childwid/100)*val;
		   
		     $(this).css('border-radius', radius+'px');
  $(this).children('.subobj').css('border-radius', childradius+'px');
     
    console.log('rr')   ;  
		   
	    }); 
	
	
}


//NOTE codeaera
codeaearun();
function codeaearun() {

$( 'body:not(.page-preview) .codearea:not(.active) .codearea-sub' ).each( function(  ) {  
var code = $(this).attr('codearea-sub-code');
		
	$(this).html('');
	 $(this).html(code);
	    }); 	

	
}












setInterval(function () {
codeaearuntest();
 
}, 1000);
function codeaearuntest() {

	
	
	 $( '.codetest' ).each( function(  ) {  

		 
		 $(this).append(' test codearea ');
	    }); 
	
	
	
	//<div class='codetest'><div>
	
}














//video float===================================================================




function videofloat() {
    
    if($('.video-float').length){
       var wind =  $(window).scrollTop();  
     if(pageeapp>0){ wind='0';}     
    
         var videofloat1 =   $('.video-float').offset().top;  
        var videoh =   $('.video-float').outerHeight()+100;  
    var fl = videofloat1 + videoh;
    
       if(fl < wind) { 
		  
       $(".video-float").addClass("video-float-on");
		     $(".video-float").closest('section').addClass('videofloatonsection');
		  
		 if( $(".video-float-on:not(.video-br)").length){ borderRadius(".border-radius-per[data-border-radius].video-float");
				  $(".video-float").addClass("video-br");										 
														 }
	   }
    else{ $(".video-float").removeClass("video-float-on");
		 $('.video-ocultar').removeClass('video-ocultar');
			 if( $(".video-float.video-br").length){ borderRadius(".border-radius-per[data-border-radius].video-float"); }
		 $(".video-float").removeClass("video-br");}
//        $('.videofloatonsection').removeClass('videofloatonsection');
   
  }  
    
}

//accordion===================================================================

pageeprogbar();
//NOTE BAR



function pageeprogbar(e) {
var elemparent = e+' .pagee-prog-bar';
if(e == undefined){elemparent = $('main .pagee-prog-bar');}


$( '.pagee-prog-bar:not(.elem-running)' ).each( function(  ) {  

		var rundelay = 'go';
	var runmodal = 'go';
	
if($(this).parents('[open-delay]').length ){ rundelay = '';  if( $(this).parents('[open-delay].open-delay').length  ){ rundelay = 'go';} }
if($(this).parents('.pmodal-content').length ){ runmodal = '';  if( $(this).parents('.modal-open').length  ){ runmodal = 'go';} }
	
	
if( rundelay == 'go' && runmodal == 'go' ){

$(this).addClass('elem-running');
	
var pstart = parseInt($(this).attr('data-pageeprogbar-start'));
	var pstop = parseInt($(this).attr('data-pageeprogbar-stop'));
  var ttime = parseInt($(this).attr('data-pageeprogbar'))*1000;
  var thisnumber = $(this).children('.pagee-prog-bar-number');
  $(this).children('.pagee-prog-bar-inside').css('width', pstart+'%');
  
	
	
    $(this).children('.pagee-prog-bar-inside').animate({

    width: pstop+"%"
  }, ttime, "linear",  function() {});
  
  
 
  jQuery({ Counter: 0 }).animate({ Counter: pstop }, {
    duration: ttime,
    easing: 'linear',
  
    step: function () {
      $(thisnumber).text(Math.ceil(this.Counter)+'%');
    }
  });
	
	
	
}
	
	
	
  
  }); 
}



//accordion===================================================================


 $("body").delegate('.acordion-head', 'click', function (){
   
$(this).toggleClass('act');
$(this).parent().siblings().children('.acordion-head').removeClass('act');
  
});



 $("body").delegate('.page-drop-menu', 'mouseenter', function (){
   
dropmenu();
});

dropmenu();

function dropmenu() {

    var mob = $('.page-center.mobile').length;
    var contentbody = $('#body').width();
    var menuposition = '';
     var bodypoasition = $('#body').offset().left;

//console.log(contentbody);
$( ".page-drop-menu" ).each( function(  ) {  

  menuposition = $(this).offset().left - bodypoasition;

    
    console.log(menuposition+'+'+bodypoasition);
    
 var  compact = $(this).attr('dropmenucompact');  
  var bar =   $(this).attr('dropmenubar'); 
    
          if( contentbody < compact){ $(this).addClass('dropmenucompact'); }
      if(contentbody > compact){ $(this).removeClass('dropmenucompact'); }
    
 
    
       if(contentbody < bar){ $(this).addClass('dropmenubar'); }
     if(contentbody > bar){ $(this).removeClass('dropmenubar'); }
    
    if( menuposition >  (contentbody/2)){ $(this).addClass('dropmenuright')}
    if( menuposition <  (contentbody/2)){ $(this).removeClass('dropmenuright')}

  }); 
    
    
    
    
}
//reveal===================================================================
reveal();
function reveal() {
    

   
      var   he = parseInt($( window ).height()/4); 
   var wind= $(window).scrollTop();
   
    if(pageeapp){wind=0;
      he = $('.page-site-scroll').height()/2; }
    
   $( "[elem-reveal]" ).each( function(  ) {  
          var top =   $(this).offset().top;
        
    var ttt = wind+he ;
console.log(he);
       console.log('s'+top+' w'+ttt);

    

       
     if(top <ttt){ 
           
       if($(this).parents('[open-delay]:not(.open-delay)').length || ($(this).attr('open-delay') && $(this).hasClass('open-delay') == false) ){ console.log('op');}    
         
        else{  $(this).addClass('elem-reveal-act'); } } 
     
         
  }); 
     
    
    
    
    
}




//modal===================================================================





 $("body ").delegate('.pmodal-close', 'click', function (e){
$(this).parents('.modal-open').removeClass('modal-open');
  
});



$("html ").delegate('body:not(.page-edite) .pmodal-content-content a', 'mouseup', function (e){
    
if( $('.pagee-plataforma').length){
        var shref = $(this).attr('temphref');
                                      
         if( shref == '' ||  shref == undefined ){
      
        $(this).parents('.modal-open').removeClass('modal-open');
                   
                   }    }
    
 else{  var bhref = $(this).attr('href');
          if( bhref == '' ||  bhref == undefined ){
      
        $(this).parents('.modal-open').removeClass('modal-open');
                   
                   }      }
  
});


//accordion===================================================================


 $("body").mousedown( function(e){
   
 if( $(e.target).parents('.page-drop-menu').length == false && $(e.target).parents('#body').length == true) {
    $(".page-drop-menu" ).removeClass('act');
  }    

});

 $("body ").delegate('.page-drop-menu >  .icone', 'mouseup', function (e){
   if( $(this).parent().hasClass('act')){$(this).parent().removeClass('act');}
     
     
     else{$(this).parent().addClass('act');}

     
     


  
});








//element delay===================================================================




function delayelement() {
    
    
     
    
      $( "body:not(.page-edite) [open-delay]" ).each( function(  ) {  
   var delayelem = $(this).attr("open-delay");
          
 var a = delayelem.split(':');
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
    if(timerpage >= seconds){ 
  $(this).addClass(' open-delay');
	pageeprogbar('.open-delay');
		
           setTimeout(function() { 
 reveal();
          }, 100);   
       
        }
          

 
  
  }); 
    
    
    
    
         $( "body:not(.page-edite) [hidden-delay]" ).each( function(  ) {  
   var delayelem = $(this).attr("hidden-delay");
          
 var a = delayelem.split(':');
var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 
 
         
    if(timerpage >= seconds){ 
  $(this).addClass('hidden-delay');
           setTimeout(function() { 
 reveal();
          }, 100);   
       
        }
          

 
  
  }); 
    
    
    
 
    
    
$( "#preview" ).mousedown( function() {   timerpage = 0;  $('.open-delay').removeClass('open-delay');  $('.hidden-delay').removeClass('hidden-delay'); }); 
    
}


//element delay===================================================================



//element delay===================================================================

var maleName = ["Miguel","Davi","Gabriel","Arthur","Lucas","Matheus","Pedro","Guilherme","Gustavo","Rafael","Felipe","Bernardo","Enzo","Nicolas","João","Pedro","Pedro","Henrique","Cauã","Vitor","Eduardo","Daniel","Henrique","Murilo","Vinicius","Samuel","Pietro","João","Vitor","Leonardo","Caio","Heitor","Lorenzo","Isaac","Lucca","Thiago","João","Gabriel","João","Theo","Bruno","Bryan","Carlos","Eduardo","Luiz","Felipe","Breno","Emanuel","Ryan","Vitor","Hugo","Yuri","Benjamin","Erick","Enzo","Gabriel","Fernando","Joaquim","André","Tomás","Francisco","Rodrigo","Igor","Antonio","Ian","Luiz","Otávio","Juan","João","Guilherme","Diogo","Otávio","Nathan","Calebe","Danilo","Luan","Luiz","Henrique","Kaique","Alexandre","João","Miguel","Iago","Ricardo","Raul","Marcelo","Julio","César","Cauê","Benício","Vitor","Gabriel","Augusto","Pedro","Lucas","Luiz","Gustavo","Giovanni","Renato","Diego","João","Paulo","Renan","Luiz","Fernando","Anthony","Lucas","Gabriel","Thales","Luiz","Miguel","Henry","Marcos","Vinicius","Kevin","Levi","Enrico","João","Lucas","Hugo","Luiz","Guilherme","Matheus","Henrique"];

var femaleName = ["Julia","Sophia","Isabella","Maria","Eduarda","Manuela","Giovanna","Alice","Laura","Luiza","Beatriz","Mariana","Yasmin","Gabriela","Rafaela","Maria","Clara","Maria","Luiza","Ana","Clara","Isabelle","Lara","Ana","Luiza","Letícia","Ana","Julia","Valentina","Nicole","Sarah","Vitória","Isadora","Lívia","Helena","Ana","Beatriz","Lorena","Clara","Larissa","Emanuelly","Heloisa","Marina","Melissa","Gabrielly","Eduarda","Maria","Fernanda","Rebeca","Amanda","Alícia","Bianca","Lavínia","Fernanda","Ester","Carolina","Emily","Cecília","Maria","Júlia","Pietra","Ana","Carolina","Milena","Marcela","Laís","Natália","Maria","Bruna","Camila","Luana","Ana","Laura","Catarina","Maria","Vitória","Maria","Alice","Olivia","Agatha","Mirella","Sophie","Stella","Stefany","Isabel","Kamilly","Elisa","Luna","Eloá","Joana","Mariane","Bárbara","Juliana","Rayssa","Alana","Ana","Sophia","Ana","Lívia","Caroline","Brenda","Evelyn","Débora","Raquel","Maitê","Ana","Nina","Maria","Sophia","Maria","Cecília","Luiz","Antonella","Jennifer","Betina","Mariah","Sabrina"];

var allName = maleName.concat(femaleName);


var rlastname = ["da Silva","dos Santos","Pereira","Alves","Ferreira","de Oliveira","Silva","Rodrigues","de Souza","Gomes","Santos","Oliveira","Ribeiro","Martins","Gonçalves","Soares","Barbosa","Lopes","Vieira","Souza","Fernandes","Lima","Costa","Batista","Dias","Moreira","de Lima","de Sousa","Nunes","da Costa","de Almeida","Mendes","Carvalho","Araujo","Cardoso","Teixeira","Marques","do Nascimento","Almeida","Ramos","Machado","Rocha","Nascimento","de Araujo","da Conceiçao","Bezerra","Sousa","Borges","Santana","de Carvalho","Aparecido","Pinto","Pinheiro","Monteiro","Andrade","Leite","Correa","Nogueira","Garcia","de Freitas","Henrique","Tavares","Coelho","Pires","de Paula","Correia","Miranda","de Jesus","Duarte","Freitas","Barros","de Andrade","Campos","Sántos","de Melo","da Cruz","Reis","Guimaraes","Moraes","do Carmo","dos Reis","Viana","de Castro","Silveira","Moura","Brito","Neves","Carneiro","Melo","Medeiros","Cordeiro","Conceição","Farias","Dantas","Cavalcante","da Rocha","de Assis","Braga","Cruz","Siqueira"];





















dynamictext();
function dynamictext(){
    
    dynamicdate();
    dynamictextname();
    dynamictextwords();
    dynamictextnumber();
    dynamictimefuc();
}




function dynamictextname(e){
    if(e == undefined){ e = ''}
 

    var tedite = $('.page-edite').length;
    

     if(tedite == false){
         
        $( "[dynamic-text=randomName]"+e).each( function(  ) {  
        
   
        
        var rfirstname = maleName;
              var sexo =   Math.floor(Math.random() * 2) + 1;
              
        if(sexo == 2){ rfirstname = femaleName;}
           
if($(this).hasClass('malename') || rfirstname == maleName){rfirstname = maleName;   }  
            
 if($(this).hasClass('femalename') || rfirstname == femaleName){rfirstname = femaleName;} 
              
  
var newtext = rfirstname[Math.floor(Math.random() * rfirstname.length)] ;
      
          
           
          $(this).text(newtext);
              
           if($(this).hasClass('rlastname')){
         var newtext2 = rlastname[Math.floor(Math.random() * rlastname.length)] ;                            
           $(this).text(newtext+" "+newtext2)                           
                                             
                                             }    
          

        
        });   
         
         
         
     }
      
    
}



function  dynamictextwords(e){
   if(e == undefined){ e = ''}

    var tedite = $('.page-edite').length;
    

     if(tedite == false){
         
 $( "[dynamic-text=dynamicWords]"+e).each( function(  ) {  
                
                var thistext = $(this).text();
                var wrandom = $(this).hasClass('dynamic-words-random');
                 var alldwords = $(this).attr('dynamic-words').split(',');
       
                if(wrandom){
                  var   word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ;
                     
                     if(word1 == thistext){  word1 = alldwords[Math.floor(Math.random() * alldwords.length)] ; }
                    
                     $(this).text(word1);
                 
                    
           
                  
                }
                else{   
                   
                   try {
    alldwords = $(this).attr('dynamic-words').split(thistext+',')[1].split(',');
                  }
       catch (e) {
   alldwords = $(this).attr('dynamic-words').split(',');
                      }
                
                    
                    
                    console.log(alldwords[0]);
                      $(this).text(alldwords[0]); 
                
                    }
         
       
 });



  }}




function dynamictextnumber(e){
    
       if(e == undefined){ e = ''}

    var tedite = $('.page-edite').length;
    

     if(tedite == false){
    
    
    
    
    
    $( "[dynamic-text=dynamicNumber]"+e).each( function(  ) {  
    

 
       
              var min = 0,  max = 1000, rmax = 5;
       if($(this).attr('dynamic-number-refresh-max')){  rmax = parseInt($(this).attr('dynamic-number-refresh-max')); }           
       if($(this).attr('dynamic-number-min')){  min = parseInt($(this).attr('dynamic-number-min')); }
       if($(this).attr('dynamic-number-max')){  max = parseInt($(this).attr('dynamic-number-max')); }         
                
          var plus  = Math.floor(Math.random() * (rmax - -rmax + 1) ) + -rmax;    
                
         if($(this).hasClass('dynamic-number-up')){ plus  = Math.floor(Math.random() * (rmax - 0 + 1) ) + 0; }
         if($(this).hasClass('dynamic-number-down')){ plus  = Math.floor(Math.random() * (0 - -rmax + 1) ) + -rmax; }        
               
                  var val= parseInt($(this).text());

     
            if(isNaN(val)){
                val = Math.floor(Math.random() * (max - min + 1) ) + min;
                    if($(this).attr('dynamic-number-start') >= 0){ val = $(this).attr('dynamic-number-start') }
				console.log('ppppp');
            }    
         
                

                
                if(val+plus < min  && $(this).hasClass('dynamic-number-down') == false){plus = rmax}
               if(val+plus > max && $(this).hasClass('dynamic-number-up') ==  false){plus = rmax * -1}
          
                
      
                
                 console.log('l'+plus);
          if(val+plus < 1){val =min; plus =0;}
                 if(val+plus < min){val =min; plus =0;}
                if(val+plus > max){val =max; plus =0;}
            
                $(this).text(val+plus);
           
    
    });
    
}}








function dynamicdate(){


$( "[dynamicdatedays]").each( function(  ) {  

    var val = parseInt($(this).attr('dynamicdatedays'));
    console.log('date');
    


function Tomorrow(date=false) {
    var givendate = (date!=false) ? new Date(date) : new Date();
    givendate.setDate(givendate.getDate() + val);
    var day = givendate.getUTCDate()
    var month = givendate.getUTCMonth()+1
    var year = givendate.getUTCFullYear()
    result = day + "/" + month + "/" + year;
    return result;
} 
var day = Tomorrow('2020-06-30');
    var datechange = Tomorrow();
    $(this).text(datechange);

    
    
   
  }); 


}






function dynamictimefuc(){

    
    $( "[dynamicminutes]").each( function(  ) {  
        
         var val = parseInt($(this).attr('dynamicminutes'))*1000;
        
var dynamictime = new Date();
var Time = dynamictime.setTime(dynamictime.getTime() + val * 60);
console.log(Time);

var date = new Date(Time);

var hours = date.getHours();

var minutes = "0" + date.getMinutes();

var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 $(this).text(formattedTime);
        
         }); 

}






//








// carousel===================================================================



  $('body').delegate('.carousel-dot-right:not(.stoped)','click',function () {
      var stoped = $(this).hasClass('stoped') ;
    var idparent = $(this).parents('.pagee-carousel').attr('id');
      
       var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
      
    var  tw1 = $(this).siblings('.carousel-content').outerWidth();
      var  tw2 = $(this).siblings('.carousel-content').children('.carousel-card').length;
      var  tw3 = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth();
      
      var tw4 = (((tw2*tw3)-tw1)/2)+((cardgap/2)*(tw2-1));
    if(tw1 < 500){     tw4 =tw4-((tw3/2)+(cardgap/2));}

  
      console.log(tw4);



      
        if($(this).parent('.pagee-carousel.carousel-full').length){ 
          $(this).siblings('.carousel-content').scrollLeft(0); 
                                                                }
  if($(this).parent('.pagee-carousel.carousel-full').length == false){ 
      
      if(tw2 % 2 == 1){
          
          tw4 = tw4- ((tw3+cardgap)/2);
           console.log(tw4);
      }
 
      $(this).siblings('.carousel-content').animate({scrollLeft: tw4});  
      

  
  }
   
   

      
      
      var  cardWidth = tw3+cardgap;
          $(this).addClass('stoped');
        setTimeout(function(){  $("#"+idparent+" .carousel-dot-right").removeClass('stoped');     }, 400); 
     

        var firstChildAppend = $("#"+idparent+" .carousel-card:first-of-type()").clone();
      
        $("#"+idparent+" .carousel-card").css('margin-left', '0');
 
      $("#"+idparent+" .carousel-card:first-of-type()").css('margin-left', '-'+cardWidth+'px');

    
       
      $("#"+idparent+" .carousel-content").append(firstChildAppend);
       
          setTimeout(function(){ 
        $("#"+idparent+" .carousel-card:first-of-type()").remove();   
                           }, 400); 
    
    });
  
  
  
  
  
  
  
  
  
    // previous-arrow
    $('body' ).delegate('.carousel-dot-left:not(.stoped)','click',function () {
        var idparent = $(this).parents('.pagee-carousel').attr('id');
      // $(this).parents('.pagee-carousel').addClass('act');
      
        var  cardgap  = parseInt( $(this).siblings('.carousel-content').css('gap'));
     var  cardWidth = $(this).siblings('.carousel-content').children('.carousel-card').outerWidth()+cardgap;
     
           var lastChildAppend = $("#"+idparent+"  .carousel-card:last-child()").clone();
      $("#"+idparent+" .carousel-content").prepend(lastChildAppend);
     
           $("#"+idparent+"  .carousel-card:first-child()").css('margin-left', '-'+cardWidth+'px');
   
        setTimeout(function(){     $("#"+idparent+"  .carousel-card").css('margin-left', '0');}, 10);
       $( "#"+idparent+"  .carousel-card:last-child()").remove(); 
      
    $(this).addClass('stoped');
    setTimeout(function(){  $("#"+idparent+" .carousel-dot-left").removeClass('stoped');     }, 400); 
  
    
    });



  $('body:not(.page-edite) .pagee-carousel:not(:hover) .carousel-dot-right').trigger('click');

setInterval(function () {
    $('body:not(.page-edite) .pagee-carousel.carousel-auto:not(:hover) .carousel-dot-right').trigger('click');
}, 4000);





//fim carousel===================================================================








elem3d() ;


function elem3d() {
$( ".mockup-3d" ).each( function(  ) {  
  var wi = $(this).outerWidth();
    var scale = $(this).attr('data-3dscale');
   
  $(this).children().children('.mockup-3d-center').css('transform', 'scale('+((wi/1000)/100)*(scale)+')');
   
  }); 
}









 $( "html" ).delegate('body:not(.page-edite) [data-btn-modal-show]','click', function(  ) {  
        
      var modalshoww = $(this).attr('data-btn-modal-show');
      
     
     $('.pmodal-content').removeClass('modal-open');

$('[data-code-id='+modalshoww+']').addClass('modal-open');
	 
	 setTimeout(function () {
pageeprogbar('.modal-open');}, 20);

  }); 


 modalload(); 

function modalload() {
$('.modal-show-load').addClass('modal-open');
}






//NOTE countdown

function countdown() {
   var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  
$( '.pagee-countdown' ).each( function(  ) {  
var tthis = $(this);
  var EVENTDATE = new Date();
 var now = new Date().getTime();
 
  
  
if($(this).attr('todate')){  EVENTDATE = $(this).attr('todate');
         var countDown = new Date(EVENTDATE).getTime();  }
  
if($(tthis).attr('countdowntime')){ 
 var  t1 = $(this).attr('countdowntime').split(':');
	var th = parseInt(t1[0] * 60 * 60);
	var tm = parseInt(t1[1] * 60);
	var ts =parseInt(t1[2]);
	
var  dtime = (th+tm+ts) * 1000;
	console.log(dtime);
 if($(tthis).attr('startcountdown') == undefined){ 
 var scountDown = new Date().getTime() + dtime;
 $(tthis).attr('startcountdown', scountDown); 
}
    
var countDown = $(tthis).attr('startcountdown');
  }
      
  
  
     if( (countDown - now) <= 0 ){ countDown = now;
     if($(tthis).hasClass('pagee-countdown-master')) {  $('.finalcountdown-show').addClass('finalcountdown-act');
		$('.finalcountdown-hidden').addClass('finalcountdown-act');
										  
	 }   
								  
		 var countredirect =	$(tthis).attr('countdown-redirect');
								  if(countredirect){
									  if( $('body.pagee-plataforma').length){ 
										   if( $('body.pagee-plataforma.page-preview:not(.coundownredirectgo)').length){
											   $('body.page-preview').addClass('coundownredirectgo');
											   alert('O visitante foi redirecionado para '+countredirect); }
										 }
									  else{  window.location = "http://www.google.com";}
									
								  }
	}
	
	
  var distance = countDown - now;  
	
	var days = Math.floor(distance / day) ;
	if(days < 10){days = '0'+days}
        $(this).find(".pagee-countdown-days").text( days);
	
		var hours = Math.floor((distance % day) / (hour));
	if(hours < 10){hours = '0'+hours}
     $(this).find(".pagee-countdown-hours").text(hours);
	
	var min = Math.floor((distance % hour) / (minute));
	if(min < 10){min = '0'+min}
        $(this).find(".pagee-countdown-minutes").text(min);
	
	var seg = Math.floor((distance % minute) / second);
	if(seg < 10){seg = '0'+seg}
       $(this).find(".pagee-countdown-seconds").text(seg);
 
  
	    }); 	  
  
  
  
}



//imgzoom








$("html").delegate('body:not(.page-edite) .img-zoom','click', function () {
var imgsrc = $(this).find('img').attr('src');
var ffilter = $(this).find('img').css('filter');	
	

	

	
	
	
$(this).parents('#body').append('<div class="img-zoom-content"><div class="imgzoomeffects"><div class="imgonzoom" style="filter:'+ffilter+'; background-image: url('+imgsrc+')"></div> <svg class="zoomicon" xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48" contenteditable="false"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" contenteditable="false"></path></svg></div></div>'); 
	
if($(this).hasClass('flip-vertical')){ $('.imgonzoom').addClass('flip-vertical')}
if($(this).hasClass('flip-horizontal')){ $('.imgonzoom').addClass('flip-horizontal')}	
	
	setTimeout(function () {
		 $(".img-zoom-content").addClass('act');
}, 50);
});

$("body").delegate('.img-zoom-content','click',function () {

 $(".img-zoom-content").removeClass('act');
 setTimeout(function () {
		 $(".img-zoom-content").remove();
}, 500);
});









$('body ').delegate('.block-tab-head-btn','click', function() {
	
  $(this).addClass('tab-act');
	 $(this).siblings().removeClass('tab-act');
	$(this).parents('.block-tab-head').siblings().removeClass('tab-act');
	
	if( $(this).hasClass('btn-btsa')){ $(this).parents('.block-tab-head').siblings('.btsa').addClass('tab-act');}
	else{$(this).parents('.block-tab-head').siblings('.btsb').addClass('tab-act');}
 
    });








$('body ').delegate('.video-float-label-btn','click', function() {
	
	var val =  $(this).closest('.video').hasClass('video-ocultar');
	
	if(val){ $('.video-ocultar').removeClass('video-ocultar');}
	else{ $(this).closest('.video').addClass('video-ocultar');}
 

 
    });













pageeimggallery(); 
function pageeimggallery(){
    $('.pagee-img-gallery-thumb-show').removeClass('pagee-img-gallery-thumb-show');
  $(".pagee-img-gallery-thumb:first-child()").each(function(){
  console.log('ssss');
     var bg = $(this).css('background-image');
    $(this).addClass('pagee-img-gallery-thumb-show');
  $('.pagee-img-gallery-amp-img').css('background-image',bg);
     $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-full-img').css('background-image',bg); 
         var rad = $(this).css('border-radius');
$(this).parent('.pagee-img-gallery-thumb-list-scroll').css('border-radius',rad);
    });
}


//$("p").click(function(){
//  $('.pagee-img-gallery').toggleClass('pagee-img-gallery-h');
//});

$("body").delegate('.pagee-img-gallery-thumb','click',function(){
  
   $(this).addClass('pagee-img-gallery-thumb-show');
   $(this).siblings().removeClass('pagee-img-gallery-thumb-show');
  var bg = $(this).css('background-image');
    var bgc = $(this).css('background-color');
     var bgp = $(this).css('background-position');
        $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-position',bgp);
//       $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-color',bgc);
$(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-amp-img').css('background-image',bg);
    var rad = $(this).css('border-radius');
$(this).parent('.pagee-img-gallery-thumb-list-scroll').css('border-radius',rad);

});





$("body").delegate('.pagee-img-gallery-amp','click',function(){

    var full = $(this).hasClass('pagee-img-gallery-amp-full');
    
    if(full){
              $(this).removeClass('pagee-img-gallery-amp-full');
     $(this).parents('section').removeClass('pagee-img-gallery-amp-full-section');
       
       
       }
       else{
        $(this).addClass('pagee-img-gallery-amp-full');
     $(this).parents('section').addClass('pagee-img-gallery-amp-full-section');
  
       }

  

 
});








$("body").delegate('.pagee-img-gallery-next','click',function(e){
  
  var lc = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show:last-child').length;

  if(lc>0){var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb:first-child');}
  else{var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show + .pagee-img-gallery-thumb');}

  
 $(el).trigger('click');
   e.stopPropagation();
});


$("body").delegate('.pagee-img-gallery-back','click',function(e){
var fc = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show:first-child').length;
 if(fc>0){ var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb:last-child');}
  else{ var el = $(this).parents('.pagee-img-gallery').find('.pagee-img-gallery-thumb-show').prev();}
  

   $(el).trigger('click');
 e.stopPropagation();
});

//inside pageeapp
$("html").delegate('body.page-edite:has(.pagee-img-gallery-thumb.active)  .images-folder img, body.page-edite:has(.pagee-img-gallery-thumb.active) #background-tools .elem:not(#ctl-bg-color2, #ctl-bg-color, #ctl-bg-mask),#ctl-duplicate','mouseup',function(e){

    
  setTimeout(function () {
		$('.pagee-img-gallery-thumb.active').trigger('click');
}, 500);  
});







//importtools();
//function importtools(){
//    
//    var platf = $('.pagee-plataforma').length;
//if(platf < 1){
//    $('body').append('<script src="js/tools.js"></script>');
//
//}
//    
//    
//}




$('body').delegate('.hiddenthisopennext','click',function() {
    console.log('click');
    var pp = $(this).parents('section');
    $(pp).removeClass('btn-show-section');
    $(pp).next('section').addClass('btn-show-section');
});
$('body').delegate('.hiddenthisopenback','click',function() {
    
    var pp = $(this).parents('section');
    $(pp).removeClass('btn-show-section');
    $(pp).prev('section').addClass('btn-show-section');
});

opensectionbtn();
function opensectionbtn(){
    
    
    
$( "section:has(.hiddenthisopennext):first" ).each( function(  ) {  
$(this).addClass('btn-show-section');
    $(this).siblings('section:has(.hiddenthisopennext)').removeClass('btn-show-section');
   
  });     
    
    
    
}





///////////audio

$("body").delegate('.pagee-svg-icon-audio','click',function(){
    
  var idd = $(this).parent().siblings('audio').attr('id')  ;
var audioplayer = document.getElementById(idd);


    if (audioplayer.paused) {
       audioplayer.play();
      $(this).parents('.pagee-audio').addClass('pagee-audio-playing');
    }   
    else {
       audioplayer.pause();
      $(this).parents('.pagee-audio').removeClass('pagee-audio-playing');
    }
    $(this).toggleClass('pause'); 

    
});


   
function pageeaudioplayer(){
    
    
      $(".pagee-audio audio").each(function(){ 
   var idd = $(this).attr('id')  ;
var audioplayer = document.getElementById(idd);
 
    var duration = audioplayer.duration ;
      var currentTime = audioplayer.currentTime ;
      var path = 100-(currentTime/(duration/100));
  
          
          
          var amastter = $(this).parents().hasClass('pagee-audio-master');
    $(this).siblings('svg').children('.js-progress-bar').css("stroke-dashoffset", path);   
      if(amastter){
          var atimer = $(this).parents('.pagee-audio-master').attr('audiotimer');
          
          var th =  parseInt(atimer.split(':')[0]) * 60 *60;
          var tm = parseInt(atimer.split(':')[1] )* 60;
          console.log(tm);
          
          var actiontimer = th + tm +  parseInt(atimer.split(':')[2]);
          console.log(actiontimer);
          
//var audioacttimer = (duration)/(100/atimer); 
       
if( currentTime > actiontimer ){
console.log('audioact');
$('.pagee-audio-master-show').addClass('pagee-audio-master-show-act'); 
$('.pagee-audio-master-hidden').addClass('pagee-audio-master-hidden-act');      
    
    }     
    }
          
          
   
   
  if( currentTime == duration ){
   $(this).parents('.pagee-audio').removeClass('pagee-audio-playing');
    
    
  }
}); 
    
}




////////////////////////////////////

    setTimeout(function() { 
        
        if(pageeapp < 1){pageeYTstart();}

          }, 5000);   

 function pageeYTstart(){
    $('.pageeYTapi').remove();
pageedirYTplayer();
}

 function pageedirYTplayer(){
 var playerstart ='';
  $( ".video" ).each(function(  ) {
    
 var iddiframe = $(this).find('iframe').attr('id');
   var iddvideo = $(this).find('iframe').attr('src').split('bed/')[1].split('?')[0];
  console.log(iddvideo);
  playerstart = playerstart+ "newYT"+iddiframe+" = new YT.Player('"+iddiframe+"', { videoId: '"+iddvideo+"', events: {	'onStateChange': onPlayerStateChange} });";

});

    $('body').append("<script class='pageeYTapi'>var tag = document.createElement('script'); tag.src = 'https://www.youtube.com/player_api'; var firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);var tag = document.createElement('script'); tag.src = 'https://www.youtube.com/player_api'; var firstScriptTag = document.getElementsByTagName('script')[0]; firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);function onYouTubePlayerAPIReady() {"+playerstart+"}</script>");
  
}
// 4. This function change name of tag click.

function onPlayerStateChange(event) {
	
	if(event.data === 0) {
  event.target.stopVideo();
    
//		getId.innerText = 's';
	}
  else if(event.data === 1) {
//		getId.innerText = 'playing';
	}
  else if(event.data === 2) {
//		getId.innerText = 'Resum p';
	}
  else if(event.data === 3) {
//		getId.innerText = 'Loading...';
	}

}



