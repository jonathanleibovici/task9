$(document).ready(function(){
$('#form').on('submit',function(event){
    event.preventDefault();
    //event is passing the event and preventing the form from submiting
    $('#tasks').prepend('<p>'+$('#input').val()+'</p>');
    //takes the id of tasks and adds to the top of the list prepend combines the imput with 
    //value of what is in the box in the html and closes the tag</p>
}
);
});


