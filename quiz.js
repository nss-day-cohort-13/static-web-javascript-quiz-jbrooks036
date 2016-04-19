var btn = document.getElementById("grow-button");

btn.addEventListener("click", function(){
    alert("button-clicked");
    paintTree();
});

function paintTree () {
	var treeHeight = document.getElementById("tree-height").value;
  var leafChar = document.getElementById("leaf-char").value;

  for (var i = 1; i <= treeHeight + 1; i++)
  {
    var tier = "";
    for (var j = treeHeight; j > 0 ; j--) {
      tier += " ";
    } 
    for (var k = 1; k < i; k++) {
      tier += leafChar;
    } 
    console.log(tier);
  }
}


