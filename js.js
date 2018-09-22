$(function (){
    // $("a").click(function(){
    //     alert("hello man i am jQuery method click");
    // });

    // $("a").hover(function(){
    //     this.css("color","red");
    // });

    // $("a").blur(function(){
    //     alert("hello i am a $ method blur");
    // });

    $("div").hover(onIn, onOut);

    function onIn(){
        $("div").html("IN");
    }
    function onOut(){
        $("div").html("OUT");
    }
    
});