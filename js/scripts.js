var items = [];


$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    var num = $("input#item").val();

    items.push(num);
    $("form")[0].reset();

    // items.forEach(function(item){
    //     $(".list").append("<li>"+item+ "</li>");
    // });
  });
  $("#showList").click(function(){
    items.forEach(function(item){
        $(".list").append("<li>"+item+ "</li>");
    });
    items = [];
    console.log(items);
    // items.clear();
  });

});
