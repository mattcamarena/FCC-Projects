function rot13(str) {
  let myTable = {"A":"N","B":"O","C":"P","D":"Q","E":"R","F":"S","G":"T","H":"U","I":"V","J":"W","K":"X","L":"Y","M":"Z","N":"A","O":"B","P":"C","Q":"D","R":"E","S":"F","T":"G","U":"H","V":"I","W":"J","X":"K","Y":"L","Z":"M"};
  var res = "";
  for(var i = 0; i < str.length; i++){
    if(myTable[str[i]] != undefined){
      res+=myTable[str[i]];
    }else{
      res+=str[i];
    }
  }
  console.log(res);
  return res;
}


function startConvert(){
  document.getElementById("res").innerHTML = rot13(document.getElementById("textBox").value.toUpperCase());

}


function clearText(){
  document.getElementById("textBox").value = "";
  document.getElementById("res").innerHTML = "";
}

