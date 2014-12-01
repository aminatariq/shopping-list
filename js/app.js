$(document).ready(function(){

/* use enter to add list items */
    $('#add-item').on("keypress", function(event){
        if (event.keyCode == 13) {
        var item = $("#add-item").val();
        $('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + item + '</span><img class="delete" src="img/delete.png"/>');
  }
});

/* add list items */
    $('#add').click(function(){
        var txtbox = document.getElementById('item');
        var txtval = txtbox.value;
        event.preventDefault();

        if(!$.trim($('#item').val())) {
            alert('Please enter text to add to the list');
        } else {
            $('<li class="items"></li>').appendTo('#list').html('<div class="box"></div><span>' + txtval + '</span><img class="delete" src="img/delete.png"/>');

        document.getElementById('item').value = '';
        };
    });

/* delete items on list */
    $('#list').on('click', '.delete', function(e){$(this).parent().remove()});

/* strike off items on list */
    $('#list').on('click', 'li', function(){$(this).toggleClass('strike'); $(this).children('.box').toggleClass('Checked');});

/* sorts items on list */
    $('#list').sortable({ axis: "y" });

});

/* removes all items from list */
$(document).on("click", "#startover", function(){
    $("#list").empty();
});