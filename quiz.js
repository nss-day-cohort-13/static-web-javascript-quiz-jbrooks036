// set up the form to accept input
var btn = document.getElementById("grow-button");
btn.addEventListener("click", function(e){
    e.preventDefault();
    tree(getInputValues());
});

function getInputValues() {
  var obj = new Object();
  obj.treeHeight = parseInt(document.getElementById("tree-height").value);
  obj.leafChar = document.getElementById("leaf-char").value;
  
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

//  setTimeout(function(){ alert("Hello"); }, 3000);
}


