
function telephoneCheck(str) {
  const ab = /^(1|)( |)(\(\d{3}\)|\d{3})(-| |)\d{3}( |-|)\d{4}$/;
  if(str.length < 10) return false;

  return ab.test(str);

}

function startVerification(){
	if(telephoneCheck(document.getElementById("textBox").value)){
		document.getElementById("res").innerHTML = "Valid U.S. Phone number";
	}else{
		document.getElementById("res").innerHTML = "Invalid U.S. Phone number";
	}
}

function clearText(){
	document.getElementById("res").innerHTML = "";
	document.getElementById("textBox").value = "";
}