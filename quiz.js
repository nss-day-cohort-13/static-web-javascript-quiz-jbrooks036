var btn = document.getElementById("grow-button");

btn.addEventListener("click", function(){
    paintTree();
});

function paintTree () {
	var treeHeight = parseInt(document.getElementById("tree-height").value);
  var leafChar = document.getElementById("leaf-char").value;

  for (var i = 1; i < treeHeight + 1; i++)
  {
    var tier = "";
    for (var j = treeHeight - i; j > 0 ; j--) {
      tier += " ";
    } 
    
    for (var k = 0; k < (2*i) - 1; k++) {
      tier += leafChar;
    } 
   
    console.log(tier);
   
  }
}


