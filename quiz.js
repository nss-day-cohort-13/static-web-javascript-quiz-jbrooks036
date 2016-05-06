// set up the form to accept input
var btn = document.getElementById("grow-button");
btn.addEventListener("click", function(e){
  e.preventDefault();
  var obj = getInputValues();
  if (obj) {
    tree(obj);      
  }
});

var treeHeightInput = document.getElementById("tree-height");
var leafCharInput = document.getElementById("leaf-char");
treeHeightInput.addEventListener("keypress", keypress);
leafCharInput.addEventListener("keypress", keypress);

function keypress(e) {
  console.log("keycode")
  if (event.keyCode == 13) {
    var obj = getInputValues();
    if (obj) {
      tree(obj); 
    }     
  }
}

function getInputValues() {
  var obj = new Object();
  obj.treeHeight = parseInt(treeHeightInput.value);
  obj.leafChar = leafCharInput.value;

  // check for missing input
  if (!obj.treeHeight || !obj.leafChar) {
      alert("both fields must have a value");
      obj = null;
  }

  return(obj);
}


// output the tree
function tree (obj) {

  var treeHeight = obj.treeHeight;
  var leafChar = obj.leafChar;

  // cycle through the tree one tier at a time, top to bottom
  for (var i = 1; i < treeHeight + 1; i++)
  {
    // build each tier, padding w/ blank spaces on the left hand side...
    var tier = "";
    for (var j = treeHeight - i; j > 0 ; j--) {
      tier += " ";
    } 
    
    // ... and then inserting correct number of leafChar's
    for (var k = 0; k < (2*i) - 1; k++) {
      tier += leafChar;
    } 
   
    // now, output the tier
    console.log(tier);
  }

}


