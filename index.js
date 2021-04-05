$( document ).ready(function() {
var checked=false;
var hamburger=true;
var backed=89914;
var backer=5007;
var blackstock=64;
var bambostock=101;
var progress=Math.floor((backed/100000)*100);
$("#myBar").width(progress+"%");
$(".blackstock").html(blackstock);
$(".bambostock").html(bambostock);
$("#backers").html(backer/1000)
$("#backed").html("$"+(backed/1000));

$(".close_modal").click(()=>{
    $(".modal_overlay").css("display", "none");
    $(".pledge").addClass("hidden");
    $(".circle_click").hide();
});

$('#back_project').click(()=>{
    $(".modal_overlay").css("display", "block");
    
})

$('.names').click(function(e){
    $(e.target.parentNode).parent().find('.pledge').toggleClass("hidden")
   /* $(this).find(".pledge").toggleClass("hidden");*/

   $(e.target.parentNode).find(".circle_click").toggle();
  /*  $(this).find(".circle_click").show();*/
});

$('.product__selection').click((e)=>{
    $(".modal_overlay").css("display", "block");
    var classname=$(e.target).attr('class').split(' ')[1];
    classname="."+classname
    $(classname).find(".pledge").toggleClass("hidden");
    $(classname).find(".circle_click").show();


})

$("#bookmark").click(function(){
    if(checked===false){
        $('#bookmark').css('color','var(--moderateCyan)');
        $("#bookmark_not").css("display", "none");
        $("#bookmark_checked").css("display", "block");
        checked=true;
    }else{
        $('#bookmark').css('color','var(--darkGray)');
        $("#bookmark_checked").css("display", "none");
        $("#bookmark_not").css("display", "block");    
        checked=false;
    }
    
})
$(".bookmarks").click(()=>{
    if(checked===false){
        $('#bookmark').css('color','var(--moderateCyan)');
        $("#bookmark_not").css("display", "none");
        $("#bookmark_checked").css("display", "block");
        checked=true;
    }else{
        $('#bookmark').css('color','var(--darkGray)');
        $("#bookmark_checked").css("display", "none");
        $("#bookmark_not").css("display", "block");    
        checked=false;
    }
})

$(".continue").click((e)=>{
   
    $(".modal").css("display", "none");
    $(".success").css("display", "block");
    $(".pledge").addClass("hidden");
    var price=$(e.target.parentNode).parent().find("input").val();
    backer++;
    backed+=Number(price);
    progress=Math.floor((backed/100000)*100);
    var product_stock=$(e.target.parentNode).parent().parent().find(".modalproduct__stock").attr('class').split(' ')[1]; 
    var bambo=Object.keys({bambostock})[0]
    var black=Object.keys({blackstock})[0]
    if(product_stock==bambo){
        if(price<25){
            $("#btnSubmit").attr("disabled", true);
        }
        bambostock--;
    }else if(product_stock==black){
        blackstock--;
    }
    if(bambostock===1){
        $(".bambostock").parent().parent().find(".continue").css('pointer-events','none');
    }
    if(blackstock===1){
        $(".blackstock").parent().parent().find(".continue").css('pointer-events','none');
    }
   
     console.log( $(".bambostock").parent().parent().find(".continue"));
  /*  product_stock="."+product_stock;*/
    $("#backers").html(backer/1000)
    $("#backed").html("$"+(backed/1000)); 
    $(".blackstock").html(blackstock);
    $(".bambostock").html(bambostock);
    if(progress<=100){
        $("#myBar").width(progress+"%");
    }else{
        $("#myBar").width("100%");
    }
   
    
})

$(".gotit").click(()=>{
    $(".modal_overlay").toggle();
    $(".modal").css("display", "block");
    $(".success").css("display", "none"); 
})

$("#burger").click((e)=>{
   
    if(hamburger){
        $(e.target).attr('src','images/icon-close-menu.svg');
        hamburger=false;
        $(".menu").show();
    }else{
        $(e.target).attr('src','images/icon-hamburger.svg');
        hamburger=true;

     $(".menu").hide();
    }
})
});
