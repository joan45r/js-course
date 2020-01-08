function processMilo() {
  const mileID = document.getElementById("mile");
  const mile = mileID.value;
  var m = mile * 1000;
  var price = 0;
  if (m < 1500) {
    price = 70;
  } else {
    var p = Math.ceil((m - 1500) / 500);
    price = 70 + p * 5;
  }
  document.getElementById("cost").innerHTML = price;
}

function verifyId() {
  const idNumID = document.getElementById("idNum");
  const idNum = idNumID.value;
  const form = document.getElementById("idForm");
  console.log(form.gender.value);
  const gender = form.gender.value;
  var temp = 0;
  switch (idNum.substr(0, 1)) {
    case 'A':
      temp = 10;
      break;
    case 'B':
      temp = 11;
      break;
    case 'C':
      temp = 12;
      break;
    case 'D':
      temp = 13;
      break;
    case 'E':
      temp = 14;
      break;
    case 'F':
      temp = 15;
      break;
    case 'G':
      temp = 16;
      break;
    case 'H':
      temp = 17;
      break;
    case 'I':
      temp = 34;
      break;
    case 'J':
      temp = 18;
      break;
    case 'K':
      temp = 19;
      break;
    case 'L':
      temp = 20;
      break;
    case 'M':
      temp = 21;
      break;
    case 'N':
      temp = 22;
      break;
    case 'O':
      temp = 35;
      break;
    case 'P':
      temp = 23;
      break;
    case 'Q':
      temp = 24;
      break;
    case 'R':
      temp = 25;
      break;
    case 'S':
      temp = 26;
      break;
    case 'T':
      temp = 27;
      break;
    case 'U':
      temp = 28;
      break;
    case 'V':
      temp = 29;
      break;
    case 'W':
      temp = 32;
      break;
    case 'X':
      temp = 30;
      break;
    case 'Y':
      temp = 31;
      break;
    case 'Z':
      temp = 33;
      break;
  }
  var sum = Math.floor((temp % 100) / 10) + (temp % 10) * 9 + Number(idNum.substr(1, 1)) * 8 + Number(idNum.substr(2, 1)) * 7 + Number(idNum.substr(3, 1)) * 6 + Number(idNum.substr(4, 1)) * 5 + Number(idNum.substr(5, 1)) * 4 + Number(idNum.substr(6, 1)) * 3 + Number(idNum.substr(7, 1)) * 2 + Number(idNum.substr(8, 1)) * 1 + Number(idNum.substr(9, 1));
  var g_result = 0;
  if (gender == 'M' && idNum.substr(1, 1) == '1') {
    g_result = 1;
  } else if (gender == 'F' && idNum.substr(1, 1) == '2') {
    g_result = 1;
  } else {
    g_result = 0;
  }
  if (sum % 10 == 0 && g_result == 1 && idNum.length == 10) {
    var result = 'real';
  } else {
    var result = 'fake';
  }
  document.getElementById("idResult").innerHTML = result;
}

function printStar() {
  var starBlock1 = "";
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
      starBlock1 += '　*　';
    }
    starBlock1 += '<br>';
  }
  var starBlock2 = "";
  for (var a = 0; a < 5; a++) {
    for (var b = 0; b <= a; b++) {
      starBlock2 += '　*　';
    }
    starBlock2 += '<br>';
  }
  var starBlock3 = "";
  var temp = 4;
  for (var i = 1; i < 6; i++) {
    for (var a = 0; a < temp; a++) {
      starBlock3 += '&nbsp;';
    }
    for (var j = 0; j < i; j++) {
      starBlock3 += '*&nbsp;';
    }
    starBlock3 += '<br>';
    temp--;
  }
  var starBlock4 = "";
  let ss;
  for (ss = 1; ss < 6; ss++) {
    starBlock4 += '*&emsp;'
    for (var j = 0; j < 3; j++) {
      if (ss == 1 || ss == 5) {
        starBlock4 += '*&emsp;'
      } else {
        starBlock4 += '&ensp;&emsp;'
      }
    }
    starBlock4 += '*&emsp;<br>';
  }

  document.getElementById("star1").innerHTML = starBlock1;
  document.getElementById("star2").innerHTML = starBlock2;
  document.getElementById("star3").innerHTML = starBlock3;
  document.getElementById("star4").innerHTML = starBlock4;
}

window.onload = function () {
  console.log("test");
}