var menu_list_array = ["Veggie Margherita Pizza",
"Neapolitan Pizza",
"Chicago Pizza",
"Extra Cheese Pizza",
"New York-Style Pizza",
"Paneer Tikka Pizza"]

function getmenu(){
    var htmldata;
    var htmldata="<ol class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<li>' + menu_list_array[i] + '<li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.sort();
    htmldata="<section class='cards'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmldata=htmldata+'<div class="card">'+
                            '<img src="https://pngimg.com/uploads/pizza/pizza_PNG7131.png"/>'+
                            menu_list_array[i]+ '</div>'
    }

}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML = htmldata;

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    add_item();
