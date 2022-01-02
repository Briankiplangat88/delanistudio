("display", "block").fadeOut();
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

// Form verification
function verification(){
    var nameInput = document.getElementById("name-input").value;
    var mailInput = document.getElementById("mail-input").value;
    if(nameInput==""){
        alert("Please fill out your name");
        return false
    }
    if(mailInput==""){
        alert("Please fill out your email")
        return false
    }
    alert("Thank you"+ nameInput + " your message has been received");
}
