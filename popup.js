function myAlert(){
    var newTask=document.getElementById("taskToAdd").value;
    var ul=document.getElementById("list");
    var li=document.createElement("li");

    //add item to the list

    var checkBox=document.createElement('input');
    checkBox.type="checkbox";
    checkBox.name='tasks';//new
    checkBox.value=1;
    li.appendChild(checkBox);
    
    li.appendChild(document.createTextNode(newTask));
    ul.appendChild(li);

    //add a checkbox next to each item in list 
    /*var checkBox=document.createElement('input');
      checkBox.type="checkbox";
      checkBox.name='tasks';//new
      checkBox.value=1;
      li.appendChild(checkBox);*/
}

        //add item button
    document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('task').addEventListener('click', myAlert);
});

        //To remove items from the list that have the corresponding checkboxes checked off
function removeSelected(){
        var list=document.getElementById("list");
        var x=list.size();
        while(list.size()>0){
          if(list.firstChild.selected){
            list.removeChild(list.firstChild);
            x=x-1;
          }
          x=x-1;
        }
}

  //delete selected items button
  document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('delete').addEventListener('click', removeSelected);
});

        //To clear the entire list, also removes white space
function clearList(){
  var list=document.getElementById("list");
  while(list.firstChild){
    list.removeChild(list.firstChild);
  }
  list.innerHTML=''; 
}
    //clear button
    document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('clear').addEventListener('click', clearList);
});