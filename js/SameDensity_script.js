var gravitySpeed = 0, gravitySpeed1 = 0, gravitySpeed2 = 0, gravitySpeed3 = 0;
// var gravitySpeed4 = 0;

var ma_obj = {"Styrofoam" : 0.99, "Wood" : 1, "Aluminium": 0.95, "Brick": 0.95, "Ice" : 0.97};
var dec_obj = {"Styrofoam" : 0.3, "Wood" : 0.2, "Aluminium": -0.4, "Brick": -0.3, "Ice" : 0.1}; 
var inc_obj = {"Styrofoam" : 0.2, "Wood" : 0.3, "Aluminium": 0.6, "Brick": 0.5, "Ice" : 0.4};
var denisty_obj = {"Styrofoam" : 0.15, "Wood" : 0.40, "Aluminium": 2.7, "Brick": 2.0, "Ice" : 0.92};
var obj_order = {"Styrofoam" : 1, "Wood" : 3, "Aluminium": 5, "Brick": 4, "Ice" : 2};

var myTimer, myTimer1, myTimer2, myTimer3;
// var myTimer4;
var put_height = 0;
var put_height1 = 0
var pieceHeight = 0;
var pieceHeight1 = 0;
var pieceHeight2 = 0;
var pieceHeight3 = 0;
// var pieceHeight4 = 0;
var amp = 1;
var amp1 = 1;
var amp2 = 1;
var amp3 = 1;
// var amp4 = 1;

$(document).ready(function(){
    $("input:radio").change(function(){
        switch($(this).val()){
            case "My Block":
                location.href = "./myblock.html";
            break;
            case "Material":
                location.href = "./index.html";
            break;
            case "Custom":
                location.href = "./index.html";
            break;
            case "Same Mass":
                location.href = "./SameMass.html";
            break;
            case "Same Volume":
                location.href = "./SameVolume.html";
            break;
            case "Same Density":
                location.href = "./SameDensity.html";
            break;
            case "Mystery":
                location.href = "./Mystery.html";
            break;
        }
    });
    pieceHeight = document.getElementById("wood").getBoundingClientRect().height;
    dragElement(document.getElementById("wood"));

    pieceHeight1 = document.getElementById("wood1").getBoundingClientRect().height;
    dragElement1(document.getElementById("wood1"));

    pieceHeight2 = document.getElementById("wood2").getBoundingClientRect().height;
    dragElement2(document.getElementById("wood2"));

    pieceHeight3 = document.getElementById("wood3").getBoundingClientRect().height;
    dragElement3(document.getElementById("wood3"));

    // pieceHeight4 = document.getElementById("wood4").getBoundingClientRect().height;
    // dragElement4(document.getElementById("wood4"));

    // myTimer = setInterval(fall_wood_interval, 10);
    // myTimer1 = setInterval(fall_wood_interval1, 10);
    // myTimer2 = setInterval(fall_wood_interval2, 10);
    // myTimer3 = setInterval(fall_wood_interval3, 10);
    // myTimer4 = setInterval(fall_wood_interval4, 10);
});

function fall_wood_interval(){
    gravitySpeed += getGravity();
    gravitySpeed *= 0.98 * ma_obj["Wood"];

    if(!(document.getElementById("wood").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
        gravitySpeed *= 0.99;
        amp = amp * 0.99;
    }
    if((parseFloat($("#wood").attr("y")) + gravitySpeed) <= (parseFloat(815) - parseFloat($("#wood").attr("height")))){
        $("#wood").attr("y", parseFloat($("#wood").attr("y")) + gravitySpeed);
    }

    if(Math.abs(gravitySpeed) < 0.0009){
        clearInterval(myTimer);
    }
}

function fall_wood_interval1(){
    gravitySpeed1 += getGravity1();
    gravitySpeed1 *= 0.98 * ma_obj["Wood"];

    if(!(document.getElementById("wood1").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood1").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
        gravitySpeed1 *= 0.99;
        amp1 = amp1 * 0.99;
    }
    if((parseFloat($("#wood1").attr("y")) + gravitySpeed1) <= (parseFloat(815) - parseFloat($("#wood1").attr("height")))){
        $("#wood1").attr("y", parseFloat($("#wood1").attr("y")) + gravitySpeed1);
    }

    if(Math.abs(gravitySpeed1) < 0.0009){
        clearInterval(myTimer1);
    }
}

function fall_wood_interval2(){
    gravitySpeed2 += getGravity2();
    gravitySpeed2 *= 0.98 * ma_obj["Wood"];

    if(!(document.getElementById("wood2").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood2").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
        gravitySpeed2 *= 0.99;
        amp2 = amp2 * 0.99;
    }
    if((parseFloat($("#wood2").attr("y")) + gravitySpeed2) <= (parseFloat(815) - parseFloat($("#wood2").attr("height")))){
        $("#wood2").attr("y", parseFloat($("#wood2").attr("y")) + gravitySpeed2);
    }

    if(Math.abs(gravitySpeed2) < 0.0009){
        clearInterval(myTimer2);
    }
}

function fall_wood_interval3(){
    gravitySpeed3 += getGravity3();
    gravitySpeed3 *= 0.98 * ma_obj["Wood"];

    if(!(document.getElementById("wood3").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood3").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
        gravitySpeed3 *= 0.99;
        amp3 = amp3 * 0.99;
    }
    if((parseFloat($("#wood3").attr("y")) + gravitySpeed3) <= (parseFloat(815) - parseFloat($("#wood3").attr("height")))){
        $("#wood3").attr("y", parseFloat($("#wood3").attr("y")) + gravitySpeed3);
    }

    if(Math.abs(gravitySpeed3) < 0.0009){
        clearInterval(myTimer3);
    }
}

// function fall_wood_interval4(){
//     gravitySpeed4 += getGravity4();
//     gravitySpeed4 *= 0.98 * ma_obj["Brick"];

//     if(!(document.getElementById("wood4").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood4").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
//         gravitySpeed4 *= 0.99;
//         amp4 = amp4 * 0.99;
//     }
//     if((parseFloat($("#wood4").attr("y")) + gravitySpeed4) <= (parseFloat(815) - parseFloat($("#wood4").attr("height")))){
//         $("#wood4").attr("y", parseFloat($("#wood4").attr("y")) + gravitySpeed4);
//     }

//     if(Math.abs(gravitySpeed4) < 0.0009){
//         clearInterval(myTimer4);
//     }
// }

function getGravity(){
    put_height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height = document.getElementById("wood").getBoundingClientRect().height;
    }
    if(document.getElementById("wood").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height = 0;
    }

    Water_Change();

    if(document.getElementById("wood").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
        return inc_obj["Wood"];
    }

    if(document.getElementById("wood").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
        return -dec_obj["Wood"] * amp;
    }
    
    return  (inc_obj["Wood"] - (inc_obj["Wood"] + dec_obj["Wood"]) * put_height / pieceHeight) * amp;
}

function getGravity1(){
    put_height1 = document.getElementById("wood1").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood1").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height1 = document.getElementById("wood1").getBoundingClientRect().height;
    }
    if(document.getElementById("wood1").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height1 = 0;
    }

    Water_Change();

    if(document.getElementById("wood1").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
        return inc_obj["Wood"];
    }

    if(document.getElementById("wood1").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
        return -dec_obj["Wood"] * amp1;
    }
    
    return  (inc_obj["Wood"] - (inc_obj["Wood"] + dec_obj["Wood"]) * put_height1 / pieceHeight1) * amp1;
}

function getGravity2(){
    put_height2 = document.getElementById("wood2").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood2").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height2 = document.getElementById("wood2").getBoundingClientRect().height;
    }
    if(document.getElementById("wood2").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height2 = 0;
    }

    Water_Change();

    if(document.getElementById("wood2").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
        return inc_obj["Wood"];
    }

    if(document.getElementById("wood2").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
        return -dec_obj["Wood"] * amp2;
    }
    
    return  (inc_obj["Wood"] - (inc_obj["Wood"] + dec_obj["Wood"]) * put_height2 / pieceHeight2) * amp2;
}

function getGravity3(){
    put_height3 = document.getElementById("wood3").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood3").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height3 = document.getElementById("wood3").getBoundingClientRect().height;
    }
    if(document.getElementById("wood3").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height3 = 0;
    }

    Water_Change();

    if(document.getElementById("wood3").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
        return inc_obj["Wood"];
    }

    if(document.getElementById("wood3").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
        return -dec_obj["Wood"] * amp3;
    }
    
    return  (inc_obj["Wood"] - (inc_obj["Wood"] + dec_obj["Wood"]) * put_height3 / pieceHeight3) * amp3;
}

// function getGravity4(){
//     put_height4 = document.getElementById("wood4").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

//     if(document.getElementById("wood4").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
//         put_height4 = document.getElementById("wood4").getBoundingClientRect().height;
//     }
//     if(document.getElementById("wood4").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
//         put_height4 = 0;
//     }

//     Water_Change();

//     if(document.getElementById("wood4").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
//         return inc_obj["Brick"];
//     }

//     if(document.getElementById("wood4").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
//         return -dec_obj["Brick"] * amp4;
//     }
    
//     return  (inc_obj["Brick"] - (inc_obj["Brick"] + dec_obj["Brick"]) * put_height4 / pieceHeight4) * amp4;
// }

function Water_Change(){
    var height;

    height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        height = document.getElementById("wood").getBoundingClientRect().height;
    }
    if(document.getElementById("wood").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        height = 0;
    }

    var moveH = height / 3;
    var moveL = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    
    var objHeight = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("wood").getBoundingClientRect().top;
    if(moveL < 0) moveL = 0;
    if(moveL > objHeight) moveL = objHeight;

    moveL = 5 * moveL / objHeight;

    height = document.getElementById("wood1").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood1").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        height = document.getElementById("wood1").getBoundingClientRect().height;
    }
    if(document.getElementById("wood1").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        height = 0;
    }

    moveH += height / 3;
    
    var moveL1 = document.getElementById("wood1").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    objHeight = document.getElementById("wood1").getBoundingClientRect().bottom - document.getElementById("wood1").getBoundingClientRect().top;
    
    if(moveL1 < 0) moveL1 = 0;
    if(moveL1 > objHeight) moveL1 = objHeight;

    moveL1 = 2.5 * moveL1 / objHeight;

    moveL += moveL1;

    var moveL2 = document.getElementById("wood2").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    objHeight = document.getElementById("wood2").getBoundingClientRect().bottom - document.getElementById("wood2").getBoundingClientRect().top;
    
    if(moveL2 < 0) moveL2 = 0;
    if(moveL2 > objHeight) moveL2 = objHeight;

    moveL2 = 9.25 * moveL2 / objHeight;

    moveL += moveL2;

    var moveL3 = document.getElementById("wood3").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    objHeight = document.getElementById("wood3").getBoundingClientRect().bottom - document.getElementById("wood3").getBoundingClientRect().top;
    
    if(moveL3 < 0) moveL3 = 0;
    if(moveL3 > objHeight) moveL3 = objHeight;

    moveL3 = 1.1 * moveL3 / objHeight;

    moveL += moveL3;

    // var moveL4 = document.getElementById("wood4").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    // objHeight = document.getElementById("wood4").getBoundingClientRect().bottom - document.getElementById("wood4").getBoundingClientRect().top;
    
    // if(moveL1 < 0) moveL4 = 0;
    // if(moveL1 > objHeight) moveL4 = objHeight;

    // moveL4 = 2.5 * moveL4 / objHeight;

    // moveL += moveL4;

    $(".st194").attr("transform","translate(0, -" + moveH + ")");
    $("#SVGID_5_").parent().attr("transform","translate(0, -" + moveH + ")");
    $(".st48").attr("transform","translate(0, -" + moveH + ")");

    $("#water-level").attr("transform","translate(0, -" + moveH+ ")");
    $("#water-level").children("div").html(Math.round(parseFloat(100) + moveL) + " L");
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    clearInterval(myTimer);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if($("#wood").attr("x") - pos1 <= 0){
        $("#wood").attr("x", 0);
    }
    else if(parseFloat($("#wood").attr("x")) + parseFloat($("#wood").attr("width")) - parseFloat(pos1) >= 771){
        $("#wood").attr("x", parseFloat(771) - parseFloat($("#wood").attr("width")));
    }
    else{
        $("#wood").attr("x", $("#wood").attr("x") - pos1);
    }

    if($("#wood").attr("y") - pos2 <= 177){
        $("#wood").attr("y", 177);
    }
    else if(parseFloat($("#wood").attr("y")) + parseFloat($("#wood").attr("height")) - parseFloat(pos2) >= parseFloat(815)){
        $("#wood").attr("y", parseFloat(815) - parseFloat($("#wood").attr("height")));
    }

    else{
        $("#wood").attr("y", $("#wood").attr("y") - pos2);
    }
    put_height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // }
    if(document.getElementById("wood").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height = document.getElementById("wood").getBoundingClientRect().height;
    }
    if(document.getElementById("wood").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height = 0;
    }

    // amp1 = 1;
    // clearInterval(myTimer1);
    // myTimer1 = setInterval(fall_wood_interval1, 10);

    getGravity();
  }

  function closeDragElement() {
    if($("#wood").attr("y") > 177){
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    }
    else{
        amp = 1;
        clearInterval(myTimer);
    }

    if($("#wood1").attr("y") > 177){
        amp1 = 1;
        clearInterval(myTimer1);
        myTimer1 = setInterval(fall_wood_interval1, 10);
    }
    else{
        amp1 = 1;
        clearInterval(myTimer1);
    }

    if($("#wood2").attr("y") > 177){
        amp2 = 1;
        clearInterval(myTimer2);
        myTimer2 = setInterval(fall_wood_interval2, 10);
    }
    else{
        amp2 = 1;
        clearInterval(myTimer2);
    }

    if($("#wood3").attr("y") > 177){
        amp3 = 1;
        clearInterval(myTimer3);
        myTimer3 = setInterval(fall_wood_interval3, 10);
    }
    else{
        amp3 = 1;
        clearInterval(myTimer3);
    }

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

function dragElement1(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("woodheader1")) {
    document.getElementById("woodheader1").onmousedown = dragMouseDown1;
  } else {
    elmnt.onmousedown = dragMouseDown1;
  }

  function dragMouseDown1(e) {
    clearInterval(myTimer1);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement1;
    document.onmousemove = elementDrag1;
  }

  function elementDrag1(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if($("#wood1").attr("x") - pos1 <= 0){
        $("#wood1").attr("x", 0);
    }
    else if(parseFloat($("#wood1").attr("x")) + parseFloat($("#wood1").attr("width")) - parseFloat(pos1) >= 771){
        $("#wood1").attr("x", parseFloat(771) - parseFloat($("#wood1").attr("width")));
    }
    else{
        $("#wood1").attr("x", $("#wood1").attr("x") - pos1);
    }

    if($("#wood1").attr("y") - pos2 <= 177){
        $("#wood1").attr("y", 177);
    }
    else if(parseFloat($("#wood1").attr("y")) + parseFloat($("#wood1").attr("height")) - parseFloat(pos2) >= parseFloat(815)){
        $("#wood1").attr("y", parseFloat(815) - parseFloat($("#wood1").attr("height")));
    }

    else{
        $("#wood1").attr("y", $("#wood1").attr("y") - pos2);
    }
    put_height1 = document.getElementById("wood1").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // }
    if(document.getElementById("wood1").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height1 = document.getElementById("wood1").getBoundingClientRect().height;
    }
    if(document.getElementById("wood1").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height1 = 0;
    }
    
    getGravity1();
  }

  function closeDragElement1() {
    if($("#wood").attr("y") > 177){
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    }
    else{
        amp = 1;
        clearInterval(myTimer);
    }

    if($("#wood1").attr("y") > 177){
        amp1 = 1;
        clearInterval(myTimer1);
        myTimer1 = setInterval(fall_wood_interval1, 10);
    }
    else{
        amp1 = 1;
        clearInterval(myTimer1);
    }

    if($("#wood2").attr("y") > 177){
        amp2 = 1;
        clearInterval(myTimer2);
        myTimer2 = setInterval(fall_wood_interval2, 10);
    }
    else{
        amp2 = 1;
        clearInterval(myTimer2);
    }

    if($("#wood3").attr("y") > 177){
        amp3 = 1;
        clearInterval(myTimer3);
        myTimer3 = setInterval(fall_wood_interval3, 10);
    }
    else{
        amp3 = 1;
        clearInterval(myTimer3);
    }

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

function dragElement2(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("woodheader2")) {
    document.getElementById("woodheader2").onmousedown = dragMouseDown2;
  } else {
    elmnt.onmousedown = dragMouseDown2;
  }

  function dragMouseDown2(e) {
    clearInterval(myTimer2);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement2;
    document.onmousemove = elementDrag2;
  }

  function elementDrag2(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if($("#wood2").attr("x") - pos1 <= 0){
        $("#wood2").attr("x", 0);
    }
    else if(parseFloat($("#wood2").attr("x")) + parseFloat($("#wood2").attr("width")) - parseFloat(pos1) >= 771){
        $("#wood2").attr("x", parseFloat(771) - parseFloat($("#wood2").attr("width")));
    }
    else{
        $("#wood2").attr("x", $("#wood2").attr("x") - pos1);
    }

    if($("#wood2").attr("y") - pos2 <= 177){
        $("#wood2").attr("y", 177);
    }
    else if(parseFloat($("#wood2").attr("y")) + parseFloat($("#wood2").attr("height")) - parseFloat(pos2) >= parseFloat(815)){
        $("#wood2").attr("y", parseFloat(815) - parseFloat($("#wood2").attr("height")));
    }

    else{
        $("#wood2").attr("y", $("#wood2").attr("y") - pos2);
    }
    put_height2 = document.getElementById("wood2").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // }
    if(document.getElementById("wood2").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height2 = document.getElementById("wood2").getBoundingClientRect().height;
    }
    if(document.getElementById("wood2").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height2 = 0;
    }

    getGravity2();
  }

  function closeDragElement2() {
    if($("#wood").attr("y") > 177){
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    }
    else{
        amp = 1;
        clearInterval(myTimer);
    }

    if($("#wood1").attr("y") > 177){
        amp1 = 1;
        clearInterval(myTimer1);
        myTimer1 = setInterval(fall_wood_interval1, 10);
    }
    else{
        amp1 = 1;
        clearInterval(myTimer1);
    }

    if($("#wood2").attr("y") > 177){
        amp2 = 1;
        clearInterval(myTimer2);
        myTimer2 = setInterval(fall_wood_interval2, 10);
    }
    else{
        amp2 = 1;
        clearInterval(myTimer2);
    }

    if($("#wood3").attr("y") > 177){
        amp3 = 1;
        clearInterval(myTimer3);
        myTimer3 = setInterval(fall_wood_interval3, 10);
    }
    else{
        amp3 = 1;
        clearInterval(myTimer3);
    }

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

function dragElement3(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById("woodheader3")) {
    document.getElementById("woodheader3").onmousedown = dragMouseDown3;
  } else {
    elmnt.onmousedown = dragMouseDown3;
  }

  function dragMouseDown3(e) {
    clearInterval(myTimer3);
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement3;
    document.onmousemove = elementDrag3;
  }

  function elementDrag3(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    if($("#wood3").attr("x") - pos1 <= 0){
        $("#wood3").attr("x", 0);
    }
    else if(parseFloat($("#wood3").attr("x")) + parseFloat($("#wood3").attr("width")) - parseFloat(pos1) >= 771){
        $("#wood3").attr("x", parseFloat(771) - parseFloat($("#wood3").attr("width")));
    }
    else{
        $("#wood3").attr("x", $("#wood3").attr("x") - pos1);
    }

    if($("#wood3").attr("y") - pos2 <= 177){
        $("#wood3").attr("y", 177);
    }
    else if(parseFloat($("#wood3").attr("y")) + parseFloat($("#wood3").attr("height")) - parseFloat(pos2) >= parseFloat(815)){
        $("#wood3").attr("y", parseFloat(815) - parseFloat($("#wood3").attr("height")));
    }

    else{
        $("#wood3").attr("y", $("#wood3").attr("y") - pos2);
    }
    put_height3 = document.getElementById("wood3").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // }
    if(document.getElementById("wood3").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height3 = document.getElementById("wood3").getBoundingClientRect().height;
    }
    if(document.getElementById("wood3").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height3 = 0;
    }

    getGravity3();
  }

  function closeDragElement3() {
    
    if($("#wood").attr("y") > 177){
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    }
    else{
        amp = 1;
        clearInterval(myTimer);
    }

    if($("#wood1").attr("y") > 177){
        amp1 = 1;
        clearInterval(myTimer1);
        myTimer1 = setInterval(fall_wood_interval1, 10);
    }
    else{
        amp1 = 1;
        clearInterval(myTimer1);
    }

    if($("#wood2").attr("y") > 177){
        amp2 = 1;
        clearInterval(myTimer2);
        myTimer2 = setInterval(fall_wood_interval2, 10);
    }
    else{
        amp2 = 1;
        clearInterval(myTimer2);
    }

    if($("#wood3").attr("y") > 177){
        amp3 = 1;
        clearInterval(myTimer3);
        myTimer3 = setInterval(fall_wood_interval3, 10);
    }
    else{
        amp3 = 1;
        clearInterval(myTimer3);
    }

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

// function dragElement4(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById("woodheader4")) {
//     document.getElementById("woodheader4").onmousedown = dragMouseDown4;
//   } else {
//     elmnt.onmousedown = dragMouseDown4;
//   }

//   function dragMouseDown4(e) {
//     clearInterval(myTimer4);
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement4;
//     document.onmousemove = elementDrag4;
//   }

//   function elementDrag4(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;

//     if($("#wood4").attr("x") - pos1 <= 0){
//         $("#wood4").attr("x", 0);
//     }
//     else if(parseFloat($("#wood4").attr("x")) + parseFloat($("#wood4").attr("width")) - parseFloat(pos1) >= 771){
//         $("#wood4").attr("x", parseFloat(771) - parseFloat($("#wood4").attr("width")));
//     }
//     else{
//         $("#wood4").attr("x", $("#wood4").attr("x") - pos1);
//     }

//     if($("#wood4").attr("y") - pos2 <= 177){
//         $("#wood4").attr("y", 177);
//     }
//     else if(parseFloat($("#wood4").attr("y")) + parseFloat($("#wood4").attr("height")) - parseFloat(pos2) >= parseFloat(815)){
//         $("#wood4").attr("y", parseFloat(815) - parseFloat($("#wood4").attr("height")));
//     }

//     else{
//         $("#wood4").attr("y", $("#wood4").attr("y") - pos2);
//     }
//     put_height4 = document.getElementById("wood4").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
//     // }
//     if(document.getElementById("wood4").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
//         put_height4 = document.getElementById("wood4").getBoundingClientRect().height;
//     }
//     if(document.getElementById("wood4").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
//         put_height4 = 0;
//     }

//     getGravity4();
//   }

//   function closeDragElement4() {
//     amp = 1;
//     clearInterval(myTimer);
//     myTimer = setInterval(fall_wood_interval, 10);

//     amp1 = 1;
//     clearInterval(myTimer1);
//     myTimer1 = setInterval(fall_wood_interval1, 10);

//     amp2 = 1;
//     clearInterval(myTimer2);
//     myTimer2 = setInterval(fall_wood_interval2, 10);

//     amp3 = 1;
//     clearInterval(myTimer3);
//     myTimer3 = setInterval(fall_wood_interval3, 10);

//     amp4 = 1;
//     clearInterval(myTimer4);
//     myTimer4 = setInterval(fall_wood_interval4, 10);

//     document.onmouseup = null;
//     document.onmousemove = null;
    
//   }
// }