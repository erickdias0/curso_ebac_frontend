$(document).ready(function (){
    $('header button').click(function(){
        $('form').slideDown()
    })
    $('#cancel-button').click(function(){
        $('form').slideUp()
    })
})

$('form').on('submit',function(e){
    e.preventDefault()
    const newTaskDesc = $('#new-task').val()
    const newTask = $(`<li style="display:none"> ${newTaskDesc} </li>`)
    newTask.appendTo('ul')
    newTask.fadeIn(800)
    $('#new-task').val('')
})

$("#list").on('click', 'li', function() {
    $(this).toggleClass('done');

});