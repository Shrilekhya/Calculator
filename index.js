var string = "";

$(".button").click(function(){

    var e =$(this).attr("value");

    if(e == '='){
        string = eval(string);
        $("#display").val(string);
    }
    else if(e == 'del'){
        string=string.substring(0, string.length - 1);
        $("#display").val(string);
    }
    else if(e == 'C'){
        string="";
        $("#display").val(string);
    }
    else{
        console.log(e);
        string = string + e ;
        $("#display").val(string);
    }
    
})