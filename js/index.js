$(function () {  
    //定时器，自动轮播
    var timer = setInterval(function(){
       swiperLeft()
    },2000)  
    //鼠标放上去事件
    $('.infinite-slide').hover(function(){ 
        clearInterval(timer);
        },function(){
            timer = setInterval(function(){
                swiperLeft() 
        },2000)
    })
})


 //向左轮播
 function swiperLeft(){
    $(".infinite-slide ul").animate({'margin-left':"-300px"},600, function () {  
        $(".infinite-slide ul>li").eq(0).appendTo($(".infinite-slide ul"));  
        $(".infinite-slide ul").css('margin-left','0px');  
    });
    changeColorLeft()
}

//向左轮播指示点颜色变化
function changeColorLeft(){
    $(".infinite-slide ul>li").css("background-color","");
    var index = ($(".infinite-slide ul>li").eq(1))[0].textContent -1
    $(".infinite-slide ul>li").eq(index)[0].style.backgroundColor = "#000"
}
//向右轮播指示点颜色变化
function changeColorRight(){
    $(".infinite-slide ul>li").css("background-color","");
     var index = ($(".infinite-slide ul>li").eq(0))[0].textContent - 1
     $(".infinite-slide ul>li").eq(index)[0].style.backgroundColor = "#000"
}