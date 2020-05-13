$(function() {
     var _scrollTop;
	$(window).scroll(function () {
        _scrollTop = $(window).scrollTop();
        console.log('scroll :', _scrollTop);  

        if(_scrollTop >=300){
        	// console.log("OK men");
        	$('.menutren').addClass('thaydoi')
        }  

        else{
        	$('.menutren').removeClass('thaydoi')
        }      

        if(_scrollTop >=4950){
            // console.log("OK men");
            $('.nencam').addClass('nencamvo')
            $('.textndgiua').addClass('textndgiuavo')
        }  

        else{
            $('.nencam').removeClass('nencamvo')
            $('.textndgiua').removeClass('textndgiuavo')
        }      
    });

     new WOW().init();
});