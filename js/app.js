$(document).ready(function () {

    // Defining global variables
    console.log('Welcome to console');
    var submissions = 0;
    var checkMark = '<span class="cross-off"></span>'
    var xMark = '<span class="delete"></span>'

    /* Allows an "Enter" keystroke to work as a submit button for input field */
    function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    // Takes returned value from previous function and manipulates it
    function postItem() {
        var item = $('#add-items').val();
        var work = '<p class="full-width no-strikethrough">'+ xMark + item + checkMark + '</p>';
        $('#list-area').prepend(work);
        $('#add-items').val('');
        $('#list-area p:first-child')
        .css('opacity', "0")
        .css("margin-top", "-20px")
        .animate(
            { opacity: "1" },
            { queue: true, duration: 'slow' }
        )
        .animate(
            {marginTop: "0px"},
            { queue: false, duration: 'slow' }
        );
    }

    function crossOff(){
        $('.cross-off').toggle(function () {
            $(this).closest('p').addClass("strikethrough");
            console.log("Stricken")
        }, function () {
            $(this).closest('p').removeClass("active");
        });
    }


});
// Sorting list items
    $('#list').sortable({ axis: "y" });
    
// Show delete button on mouse hover
    $('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
    $('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

// Clears all items on list
$(document).on("click", "#startover", function(){
    $("#list").empty();
    submissions = 0;
});

// Allows user to delete items
$(document).on("click", ".delete", function(){
    $(this).closest('p').fadeOut(300);
});*/

// Allows user to check off items
$(document).on("click", ".cross-off", function(){
    if (!$(this).closest('p').hasClass('strikethrough')) {
        console.log("I am going to add a strikethrough");
        $(this).closest('p').addClass("strikethrough");
        $(this).siblings('.delete').addClass("alt-delete");
        $(this).addClass("alt-cross-off");
   }
   else {
        console.log("I am going to remove a strikethrough");
        $(this).closest('p').removeClass("strikethrough");
        $(this).siblings('.delete').removeClass("alt-delete");
        $(this).removeClass("alt-cross-off");
   }
});


____________________

/*
$(document).ready(function(){

// use enter to add list items
    $('#item').keyup(function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            $('#add').click();
        };
    }); 

//add list items
    $('#add').click(function(){
        var txtbox = document.getElementById('item');
        var txtval = txtbox.value;
        event.preventDefault();

        if(!$.trim($('#item').val())) {
            alert('Please enter text to add to the list');
        } else {
            $('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="images/delete.png"/>');

        document.getElementById('item').value = '';
        };
    });

//delete list items
    $('#list').on('click', '.delete', function(e){e.preventDefault(); $(this).parent().remove()});

//cross off list items
    $('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

//sortable list items
    $('#list').sortable({ axis: "y" });
    
//show delete button on mouse hover
    $('#list').on('mouseenter', 'li', function(){$(this).children('.delete').toggleClass('show');});
    $('#list').on('mouseleave', 'li', function(){$(this).children('.delete').toggleClass('show');});

});*/
