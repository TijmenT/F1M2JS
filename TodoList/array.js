
let btn_add = document.getElementById("add");
let myItems = [];

btn_add.addEventListener("click", ()=>{
    var inputValue = document.getElementById("myInput").value;
    var li = document.createElement("li");
    li.innerHTML = inputValue;
    myItems.push(li);
    document.getElementById("myUL").append(li);
});

let btn_finish = document.getElementById("finish")

btn_finish.addEventListener("click", ()=>{
    var list = document.querySelector('ul');
    list.addEventListener('click', function(ev) {
      if (ev.target.tagName === 'li') {
        ev.target.classList.toggle(color= "red");
      }
    }, false);

});

let btn_remove = document.getElementById("remove")

btn_remove.addEventListener("click", ()=>{
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("SPAN");
      var txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }

    var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

});

function updateListing(){

}