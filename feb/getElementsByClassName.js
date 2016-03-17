var getElementsByClassName = function(className){
  var result = [];
  function diveIn(motherNode, result, className){
    var maNodes = motherNode.childNodes
    for (var i = 0; i < maNodes.length; i++){
        var classes = maNodes[i].classList;
        if (classes && classes.contains(className)) {
            result.push(maNodes[i]);
        }
        if (maNodes[i].childNodes[0]){
            diveIn(maNodes[i], result, className);
        }
    }
  }
  diveIn(document, result, className);
  return result;
};
