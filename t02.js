function sortArray() {
  const myArray = document.getElementById("myArray").value;
  // 轉換為陣列
  origin = myArray.split(" "); // 全域變數
  const userArray = myArray.split(" ");
  document.getElementById("userArray").innerHTML = userArray;
  // 最大、最小
  var maxValue = Math.max.apply(Math, userArray);
  var minValue = Math.min.apply(Math, userArray);
  document.getElementById("userMax").innerHTML = maxValue;
  document.getElementById("userMin").innerHTML = minValue;
  // 排序(升冪、降冪)
  var tempArray = myArray.split(" ");
  var rise = tempArray.sort((x, y) => x - y);
  document.getElementById("riseArray").innerHTML = rise;
  var drop = tempArray.sort((x, y) => y - x);
  document.getElementById("dropArray").innerHTML = drop;
  // 陣列反轉
  var tempArray = myArray.split(" ");
  var reverseArray = tempArray.reverse();
  document.getElementById("reverseArray").innerHTML = reverseArray;
  console.log(userArray);
}
function searchArray() {
  // 搜尋陣列
  const findValue = document.getElementById("findArray").value;
  const tempArray = origin;
  var find = tempArray.findIndex(e => e == findValue);
  if (find >= 0) {
    document.getElementById("find").innerHTML = "第 " + (find + 1) + " 個位置";
  } else {
    document.getElementById("find").innerHTML = "查無元素";
  }

}
function appendArray() {
  // 新增元素
  const addValue = document.getElementById("addArray").value;
  var tempArray = origin;
  // var addArray = addValue.replace(" ", '", "');
  tempArray.push(addValue);
  document.getElementById("newArray").innerHTML = tempArray;
}
function popArray() {
  // 刪除元素
  const tempArray = origin;
  tempArray.pop();
  document.getElementById("new2Array").innerHTML = tempArray;
}
function deleteArray() {
  // 移除某個元素
  const tempArray = origin;
  var del = document.getElementById("delArray").value;
  var remove = tempArray.splice(--del, 1);
  document.getElementById("removeValue").innerHTML = remove;
  document.getElementById("new3Array").innerHTML = tempArray;
}

function morse() {
  // 摩斯密碼
  var code = document.getElementById("morseCode").value;
  var tempCode = code.replace(/\n/g, ' <br> ')
  var tempArray = tempCode.split(" ");
  console.log(tempArray);
  var codeArray = ['.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '<br>'];
  var alphArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '<br>'];
  var newText = "";
  for (var x in tempArray) {
    var find = tempArray[x];
    for (var c in codeArray) {
      if (find == codeArray[c]) {
        newText += alphArray[c];
      }
    }
  }
  console.log(newText);
  document.getElementById("transText").innerHTML = newText;
}