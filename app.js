
let formWindow = document.createElement('textarea');
formWindow.className = "textArea";
// formWindow.setAttribute('',"autofocus")
document.body.prepend(formWindow); 


let keyboardBody = document.createElement('div');
keyboardBody.className = "keyboardBody";
    formWindow.after(keyboardBody)

 let keyboardRow = document.createElement('div');
 keyboardRow.className = "keyboardRow";
 document.querySelector('.keyboardBody').append(keyboardRow);

let keyboardRow2 = document.querySelector('.keyboardRow').cloneNode(true);
    keyboardRow.after(keyboardRow2);

let keyboardRow3 = document.querySelector('.keyboardRow').cloneNode(true);
    keyboardRow2.after(keyboardRow3);

let keyboardRow4 = document.querySelector('.keyboardRow').cloneNode(true);
    keyboardRow3.after(keyboardRow4);
    
let keyboardRow5 = document.querySelector('.keyboardRow').cloneNode(true);
    keyboardRow4.after(keyboardRow5);

   
//первая строка
    let keyKey = document.createElement('div');
        keyKey.className = 'key';
        keyKey.innerHTML = '~';
        document.querySelector('.keyboardRow').append(keyKey);

    let key_1 = document.createElement('div');
        key_1.className = 'key';
        key_1.innerHTML = '1';
        document.querySelector('.keyboardRow').append(key_1);

    let key_2 = document.createElement('div');
        key_2.className = 'key';
        key_2.innerHTML = '2';
        document.querySelector('.keyboardRow').append(key_2);

    let key_3 = document.createElement('div');
        key_3.className = 'key';
        key_3.innerHTML = '3';
        document.querySelector('.keyboardRow').append(key_3);

    let key_4 = document.createElement('div');
        key_4.className = 'key';
        key_4.innerHTML = '4';
        document.querySelector('.keyboardRow').append(key_4);

    let key_5 = document.createElement('div');
        key_5.className = 'key';
        key_5.innerHTML = '5';
        document.querySelector('.keyboardRow').append(key_5);

    let key_6 = document.createElement('div');
        key_6.className = 'key';
        key_6.innerHTML = '6';
        document.querySelector('.keyboardRow').append(key_6);

    let key_7 = document.createElement('div');
        key_7.className = 'key';
        key_7.innerHTML = '7';
        document.querySelector('.keyboardRow').append(key_7);

    let key_8 = document.createElement('div');
        key_8.className = 'key';
        key_8.innerHTML = '8';
        document.querySelector('.keyboardRow').append(key_8);

    let key_9 = document.createElement('div');
        key_9.className = 'key';
        key_9.innerHTML = '9';
        document.querySelector('.keyboardRow').append(key_9);

    let key_0 = document.createElement('div');
        key_0.className = 'key';
        key_0.innerHTML = '0';
        document.querySelector('.keyboardRow').append(key_0);

    let key_minus = document.createElement('div');
        key_minus.className = 'key';
        key_minus.innerHTML = '-';
        document.querySelector('.keyboardRow').append(key_minus);

    let key_plus = document.createElement('div');
        key_plus.className = 'key';
        key_plus.innerHTML = '+';
        document.querySelector('.keyboardRow').append(key_plus);

    let keyBack = document.createElement('div');
        keyBack.className = 'keyBACK';
        keyBack.innerHTML = 'Backspace';
        document.querySelector('.keyboardRow').append(keyBack);

// вторая строка

let keyTAB = document.createElement('div');
    keyTAB.className = 'keyTAB tab';
    keyTAB.innerHTML = "TAB";
    document.querySelectorAll('.keyboardRow')[1].append(keyTAB);

let KeyQ = document.createElement('div');
    KeyQ.className = 'key KeyQ';
    KeyQ.innerHTML = "q"; //!!!!!!!
    document.querySelectorAll('.keyboardRow')[1].append(KeyQ);

let keyW = document.createElement('div');
    keyW.className = 'key';
    keyW.innerHTML = "w";
    document.querySelectorAll('.keyboardRow')[1].append(keyW);

let keyE = document.createElement('div');
    keyE.className = 'key';
    keyE.innerHTML = "e";
    document.querySelectorAll('.keyboardRow')[1].append(keyE);

let keyR = document.createElement('div');
    keyR.className = 'key';
    keyR.innerHTML = "r";
    document.querySelectorAll('.keyboardRow')[1].append(keyR);

let keyT = document.createElement('div');
    keyT.className = 'key';
    keyT.innerHTML = "t";
    document.querySelectorAll('.keyboardRow')[1].append(keyT);

let keyY = document.createElement('div');
    keyY.className = 'key';
    keyY.innerHTML = "y";
    document.querySelectorAll('.keyboardRow')[1].append(keyY);

let keyU = document.createElement('div');
    keyU.className = 'key';
    keyU.innerHTML = "u";
    document.querySelectorAll('.keyboardRow')[1].append(keyU);

let keyI = document.createElement('div');
    keyI.className = 'key';
    keyI.innerHTML = "i";
    document.querySelectorAll('.keyboardRow')[1].append(keyI);

let keyO = document.createElement('div');
    keyO.className = 'key';
    keyO.innerHTML = "o";
    document.querySelectorAll('.keyboardRow')[1].append(keyO);

let keyP = document.createElement('div');
    keyP.className = 'key';
    keyP.innerHTML = "p";
    document.querySelectorAll('.keyboardRow')[1].append(keyP);

let keyLeftBracked = document.createElement('div');
    keyLeftBracked.className = 'key';
    keyLeftBracked.innerHTML = "[";
    document.querySelectorAll('.keyboardRow')[1].append(keyLeftBracked);

let keyRightBracked = document.createElement('div');
    keyRightBracked.className = 'key';
    keyRightBracked.innerHTML = "]";
    document.querySelectorAll('.keyboardRow')[1].append(keyRightBracked);

let keyRightSlash = document.createElement('div');
    keyRightSlash.className = 'key';
    keyRightSlash.innerHTML = "/";
    document.querySelectorAll('.keyboardRow')[1].append(keyRightSlash);

let keyDel = document.createElement('div');
    keyDel.className = 'keyDel keyTAB';
    keyDel.innerHTML = 'Del';
    document.querySelectorAll(".keyboardRow")[1].append(keyDel);

    //третий ряд

    
let keyCapsLock = document.createElement('div');
    keyCapsLock.className = 'keyBACK keyCAPS ';
    keyCapsLock.innerHTML = 'Caps Lock';
    document.querySelectorAll(".keyboardRow")[2].append(keyCapsLock);

let keyA = document.createElement('div');
    keyA.className = 'key';
    keyA.innerHTML = 'a';
    document.querySelectorAll(".keyboardRow")[2].append(keyA);

let keyS = document.createElement('div');
    keyS.className = 'key';
    keyS.innerHTML = 's';
    document.querySelectorAll(".keyboardRow")[2].append(keyS);

let keyD = document.createElement('div');
    keyD.className = 'key';
    keyD.innerHTML = 'd';
    document.querySelectorAll(".keyboardRow")[2].append(keyD);

let keyF = document.createElement('div');
    keyF.className = 'key';
    keyF.innerHTML = 'f';
    document.querySelectorAll(".keyboardRow")[2].append(keyF);

let keyG = document.createElement('div');
    keyG.className = 'key';
    keyG.innerHTML = 'g';
    document.querySelectorAll(".keyboardRow")[2].append(keyG);

let keyH = document.createElement('div');
    keyH.className = 'key';
    keyH.innerHTML = 'h';
    document.querySelectorAll(".keyboardRow")[2].append(keyH);

let keyJ = document.createElement('div');
    keyJ.className = 'key';
    keyJ.innerHTML = 'j';
    document.querySelectorAll(".keyboardRow")[2].append(keyJ);

let keyK = document.createElement('div');
    keyK.className = 'key';
    keyK.innerHTML = 'k';
    document.querySelectorAll(".keyboardRow")[2].append(keyK);

let keyL = document.createElement('div');
    keyL.className = 'key';
    keyL.innerHTML = 'l';
    document.querySelectorAll(".keyboardRow")[2].append(keyL);

let keySemicolon = document.createElement('div');
    keySemicolon.className = 'key';
    keySemicolon.innerHTML = ';';
    document.querySelectorAll(".keyboardRow")[2].append(keySemicolon);

let keyQuotationMarks = document.createElement('div');
    keyQuotationMarks.className = 'key';
    keyQuotationMarks.innerHTML = '\'';
    document.querySelectorAll(".keyboardRow")[2].append(keyQuotationMarks);

let keyEnter = document.createElement('div');
    keyEnter.className = 'keyEnter';
    keyEnter.innerHTML = 'Enter';
    document.querySelectorAll(".keyboardRow")[2].append(keyEnter);

//четвертая строка

let keyShift = document.createElement('div');
    keyShift.className = 'keyBACK shift';
    keyShift.innerHTML = 'Shift';
    document.querySelectorAll(".keyboardRow")[3].append(keyShift);

let leftKeyRigthSlash = keyRightSlash.cloneNode(true);
    document.querySelectorAll(".keyboardRow")[3].append(leftKeyRigthSlash);

let keyZ = document.createElement('div');
    keyZ.className = 'key';
    keyZ.innerHTML = 'z';
    document.querySelectorAll(".keyboardRow")[3].append(keyZ);

let keyX = document.createElement('div');
    keyX.className = 'key';
    keyX.innerHTML = 'x';
    document.querySelectorAll(".keyboardRow")[3].append(keyX);

let keyC = document.createElement('div');
    keyC.className = 'key';
    keyC.innerHTML = 'c';
    document.querySelectorAll(".keyboardRow")[3].append(keyC);

let keyV = document.createElement('div');
    keyV.className = 'key';
    keyV.innerHTML = 'v';
    document.querySelectorAll(".keyboardRow")[3].append(keyV);

let keyB = document.createElement('div');
    keyB.className = 'key';
    keyB.innerHTML = 'b';
    document.querySelectorAll(".keyboardRow")[3].append(keyB);

let keyN = document.createElement('div');
    keyN.className = 'key';
    keyN.innerHTML = 'n';
    document.querySelectorAll(".keyboardRow")[3].append(keyN);

let keyM = document.createElement('div');
    keyM.className = 'key';
    keyM.innerHTML = 'm';
    document.querySelectorAll(".keyboardRow")[3].append(keyM);

let keyDot = document.createElement('div');
    keyDot.className = 'key';
    keyDot.innerHTML = '.';
    document.querySelectorAll(".keyboardRow")[3].append(keyDot);

let keyComma = document.createElement('div');
    keyComma.className = 'key';
    keyComma.innerHTML = ',';
    document.querySelectorAll(".keyboardRow")[3].append(keyComma);

let keyRigthslach = document.createElement('div');
    keyRigthslach.className = 'key';
    keyRigthslach.innerHTML = '\\';
    document.querySelectorAll(".keyboardRow")[3].append(keyRigthslach);

let keyUp = document.createElement('div');
    keyUp.className = 'keyArrow';
    keyUp.innerHTML = '⮝';
    document.querySelectorAll(".keyboardRow")[3].append(keyUp);

    
let rigthShift = document.createElement('div');
    rigthShift.className = 'rightShift';
    rigthShift.innerHTML = 'shift';
    document.querySelectorAll(".keyboardRow")[3].append(rigthShift);

//пятый ряд

let ctrl = document.createElement('div');
    ctrl.className = 'keyALT_CTRL';
    ctrl.innerHTML = 'ctrl';
    document.querySelectorAll(".keyboardRow")[4].append(ctrl);

let win = document.createElement('div');
    win.className = 'keyALT_CTRL';
    win.innerHTML = 'win';
    document.querySelectorAll(".keyboardRow")[4].append(win);

let alt = document.createElement('div');
    alt.className = 'keyALT_CTRL';
    alt.innerHTML = 'alt';
    document.querySelectorAll(".keyboardRow")[4].append(alt);

let space = document.createElement('div');
    space.className = 'space key';
    space.innerHTML = ' '
    document.querySelectorAll(".keyboardRow")[4].append(space); 

let rightAlt = alt.cloneNode(true);
    document.querySelectorAll(".keyboardRow")[4].append(rightAlt);

let rightCtrl = ctrl.cloneNode(true);
    document.querySelectorAll(".keyboardRow")[4].append(rightCtrl);

let keyleft = document.createElement('div');
    keyleft.className = 'keyArrow';
    keyleft.innerHTML = '⮜';
    document.querySelectorAll(".keyboardRow")[4].append(keyleft);

let keyBottom = document.createElement('div');
    keyBottom.className = 'keyArrow';
    keyBottom.innerHTML = '⮟';
    document.querySelectorAll(".keyboardRow")[4].append(keyBottom);

let keyRight = document.createElement('div');
    keyRight.className = 'keyArrow';
    keyRight.innerHTML = '⮞';
    document.querySelectorAll(".keyboardRow")[4].append(keyRight);

//начало скрипта ввода символов

let keys  = document.querySelectorAll('.key');
let display = document.querySelector('.textArea'); //добавляет текст в инпут
let clear = document.querySelector('.keyBACK');
let delClear = document.querySelector('.keyDel');
let tab = document.querySelector('.tab');
let capsLock = document.querySelector('.capsLock');
let keyCAPS = document.querySelector('.keyCAPS');
let shift = document.querySelector('.shift');
let rightShift = document.querySelector('.rightShift')

document.addEventListener('keydown', function(event) {
    if(event.code == KeyQ.className(KeyQ)){
        display.textContent += KeyQ.textContent;
        console.log('yes');
    }
  });

    for (let key of keys) {
        key.onclick = function () {
            // if(keyCAPS.classList.contains('capsLock') && 
            //     shift.classList.contains('capsLock') ){
            //     for(let i of keys){
            //         i.innerHTML = i.innerHTML.toLowerCase();
            //         shift.onclick();
            //     }
            //     display.textContent += key.textContent.toLowerCase();
            // } 
             if(keyCAPS.classList.contains('capsLock'))  {
                display.textContent += key.textContent;
            } else if(shift.classList.contains('capsLock')){
                display.textContent += key.textContent.toUpperCase();
                shift.onclick();
            } else if (rightShift.classList.contains('capsLock')){
                display.textContent += key.textContent.toUpperCase();
                rightShift.onclick();
            } else {
                display.textContent += key.textContent.toLowerCase();
                } 
        }
    };


  clear.onclick = function () {
    display.textContent = display.textContent.replace(/.$/i, '');
    console.log('backSpace');
  };

  delClear.onclick = function () {
    display.textContent = display.textContent.replace(/./i, '');
    console.log('keyDel');
  };

  tab.onclick = function() {
      display.textContent = display.textContent + "    ";
  };
  keyEnter.onclick = function() {
      display.textContent += '\n';
      console.log('enter');
  }

    function revCollection(x) {
        for(let i of keys){
            i.innerHTML = i.innerHTML.toLowerCase();
            if(x.classList.contains('capsLock')){
                i.innerHTML = i.innerHTML.toUpperCase();
            }
        }
    }

   keyCAPS.onclick = function() {
     keyCAPS.classList.toggle('capsLock');
     revCollection(keyCAPS)
       
    }

    shift.onclick = function() {
        shift.classList.toggle('capsLock');
        revCollection(shift);
        
    }
    rightShift.onclick = function() {
        rightShift.classList.toggle('capsLock');
        revCollection(rightShift);
        
    }