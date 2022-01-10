$(document).ready(function(){
    $("section .header").addClass('text-center text-white');
    // $("#what-we-do").addClass('justify-content-center ml-5');
       
    $("#design").click(function(){
        $("#hidden-design").toggle()
        $("#design").toggle()
    });
    $("# design hide ").click(function(){
        $("#design").toggle()
        $("#hidden design").toggle()

        $("#development").click(function(){
            $("#hidden development").toggle()
            $("#development").toggle()
        });
        $("#hidden development").click(function(){
            $("#development").toggle()
            $("#hidden development").toggle()

            $("#development").click(function(){
                $("#hidden-development").toggle()
                $("#product").toggle()
            });
            $("#hidden product").click(function(){
                $("#product").toggle()
                $("#hidden product").toggle()

   

//hover on portfolio 1
$("#bailey1, #baileyword1").hover(function(){
    $("#baileyword1").css("display", "block").fadeIn();
},
function(){
    $("#baileyword1").css("display", "block").fadeOut();
});

$("#bailey2, #baileyword2").hover(function(){
    $("#baileyword2").css("display", "block").fadeIn();
},
function(){
    $("#baileyword2").css("display", "block").fadeOut();
});

$("#bailey3, #baileyword3").hover(function(){
    $("#baileyword3").css("display", "block").fadeIn();
},
function(){
    $("#baileyword3").css("display", "block").fadeOut();
});

$("#bailey4, #baileyword4").hover(function(){
    $("#baileyword4").css("display", "block").fadeIn();
},
function(){
    $("#baileyword4").css("display", "block").fadeOut();
});


//hover on portfolio two
$("#bailey5, #baileyword5").hover(function(){
    $("#baileyword5").css("display", "block").fadeIn();
},
function(){
    $("#baileyword5").css("display", "block").fadeOut();
});

$("#bailey6, #baileyword6").hover(function(){
    $("#baileyword6").css("display", "block").fadeIn();
},
function(){
    $("#baileyword6").css("display", "block").fadeOut();
});

$("#bailey7, #baileyword7").hover(function(){
    $("#baileyword7").css("display", "block").fadeIn();
},
function(){
    $("#baileyword7").css("display", "block").fadeOut();
});

$("#bailey8, #baileyword8").hover(function(){
    $("#baileyword8").css("display", "block").fadeIn();
},
function(){
    $("#baileyword8").css("display", "block").fadeOut();
});

})

function verify(){
    let name = document.getElementById('idname').value;
    let email = document.getElementById('idemail').value;
    if(name==''){
        alert('input valid name');
        return false
    }
    if(email==''){
        alert('input valid email');
        return false
    }
    else{alert('welcome '+name)
    alert('message received')
    }
