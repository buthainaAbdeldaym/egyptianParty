// $(".show-hide").click(function(){
//     $(".window").animate({width:'250px'},500)
//     $(".show-hide").animate({left:'250px'},500)
//     $(".layer-content").animate({marginLeft:'250px'},500)
// })


// $(".colse-mark").click(function(){
//     $(".window").animate({width:'0px'},500);
//     $(".show-hide").animate({left:'0px'},500)
//     $(".layer-content").animate({marginLeft:'0px'},500)
// })


$(".show-hide").click(function(){
    $(".window").toggleClass("width")
    $(".show-hide").toggleClass("left")
    $(".layer-content").toggleClass("margin-left")
})
$(".colse-mark").click(function(){
    $(".window").toggleClass("width")
    $(".show-hide").toggleClass("left")
    $(".layer-content").toggleClass("margin-left")
})



// $('.details div .details-content').slideUp(1000);


$('.details div .detail1').css("display","block");

// .details div .details-content
$(".details div .head").click(function(){
    $('.details div .details-content').not($(this).next()).slideUp(1000);
    $(this).next().slideToggle(1000);
})


var countDate=new Date("Dec 31, 2022 23:59:59").getTime();
var counter=setInterval(()=>{

    var nowDate=new Date().getTime();
    var difDate=countDate-nowDate;


    var days = Math.floor( difDate/(1000*60*60*24));
    var hours = Math.floor((difDate%(1000*60*60*24))/(1000*60*60));
    var minutes = Math.floor((difDate%(1000*60*60))/(1000*60));
    var seconds = Math.floor((difDate%(1000*60))/1000)

    document.querySelector(".days").innerHTML=`${days} D`;
    document.querySelector(".hours").innerHTML=`${hours} h`;
    document.querySelector(".minutes").innerHTML=minutes<10?`0${minutes} m`:`${minutes} m`;
    document.querySelector(".seconds").innerHTML=seconds<10?`0${seconds} s`:`${seconds} s`;

},1000)


var text=$(".contact .container .row .cols2 .text"),
    count=$(".contact .container .row .cols2 p .count"),
    maxLength=text.attr("maxlength"),
    maxLength=Number(maxLength);
text.keyup(function(){
    var currentLength=maxLength-$(this).val().length;
    count.html(currentLength);
    if(currentLength==0)
    {
        count.html("your available character finished");
    }
})



$(".home .window ul li a").click(function(){
    var locationOfSection=$($(this).attr("href")).offset().top;
    $("html,body").animate({scrollTop:locationOfSection})
})

