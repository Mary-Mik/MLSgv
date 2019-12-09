menuS.onclick = function topMenu() {
    var x = document.getElementById('myTopnav');
    // var h = document.getElementById("hg");
    if (x.className === "topnav") {
        x.className += " responsive";
        // h.className += " menu_height";
    } else {
        x.className = "topnav";
        // h.className = "header_grid";
    }
}

function teamHover(event){
    if (event.type == 'mouseover') {
        event.target.style.background = 'pink'
      }
      if (event.type == 'mouseout') {
        event.target.style.background = ''
      }
}