function changeInnerHTML()
{
    wood.style.height=50+"px"

    mysttL= htmlValue.value
    var width=wood.scrollWidth
    var height=wood.scrollHeight
    if(height>50)
    {
        mysst=height+"px"
    }
}

var assets = { wood : {gravitySpeed: 0}};

var ma_obj = {"Styrofoam" : 0.99, "Wood" : 1, "Aluminium": 0.95, "Brick": 0.95, "Ice" : 0.97};
var dec_obj = {"Styrofoam" : 0.3, "Wood" : 0.2, "Aluminium": -0.4, "Brick": -0.3, "Ice" : 0.1}; 
var inc_obj = {"Styrofoam" : 0.2, "Wood" : 0.3, "Aluminium": 0.6, "Brick": 0.5, "Ice" : 0.4};
var denisty_obj = {"Styrofoam" : 0.15, "Wood" : 0.40, "Aluminium": 2.7, "Brick": 2.0, "Ice" : 0.92};
var obj_order = {"Styrofoam" : 1, "Wood" : 3, "Aluminium": 5, "Brick": 4, "Ice" : 2};

var currentMaterial = "Wood";
var oldMaterial = "Wood";

var myTimer;
var put_height = 0;
var pieceHeight = 0;
var amp = 1;

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

    $(".slidecontainer1").children("input").val(100 * denisty_obj[currentMaterial]);
    if($(".slidecontainer1").children("input").val() <= 0){
        $("#denisty-level").attr("x", 33);
    }
    else{
        $("#denisty-level").attr("x", 32 + 0.63 * ($(".slidecontainer1").children("input").val()));
    }
    $("#volume_range").html((parseFloat($("#mass_range").html()) / parseFloat(denisty_obj[currentMaterial])).toFixed(2));
    myTimer = setInterval(fall_wood_interval, 10);

    $("#select_type").change(function(){
        $("#woodheader").children("img").attr("src", "./assets/" + $(this).val() + ".svg");
        currentMaterial = $(this).val();

        $("#volume_range").html((parseFloat($("#mass_range").html()) / parseFloat(denisty_obj[currentMaterial])).toFixed(2));

        $("#denisty-level").children("div").html((denisty_obj[currentMaterial]).toFixed(2) + " Kg/L");
        // $("#woodheader").parent().attr("width", 100 * Math.pow(denisty_obj[oldMaterial]/denisty_obj[currentMaterial], 1/3));
        
        $("#woodheader").parent().attr("width", 100 * Math.pow(parseFloat($("#volume_range").html()/5), 1/3));
        $("#woodheader").parent().attr("height", $("#woodheader").parent().attr("width"));
        $(".slidecontainer1").children("input").val(100 * denisty_obj[currentMaterial]);
        if($(".slidecontainer1").children("input").val() <= 0){
            $("#denisty-level").attr("x", 33);
        }
        else{
            $("#denisty-level").attr("x", 32 + 0.63 * ($(".slidecontainer1").children("input").val()));
        }

        if(document.getElementById("wood").getBoundingClientRect().bottom + parseFloat($("#wood").attr("height")) > parseFloat(815)){
            $("#wood").attr("y", parseFloat(815) - parseFloat($("#wood").attr("height")));
        }
        $("#range2").val((parseFloat($("#mass_range").html()) / parseFloat(denisty_obj[currentMaterial])).toFixed(2) * 10);
        pieceHeight = document.getElementById("wood").getBoundingClientRect().height;
        
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
        oldMaterial = currentMaterial;
    });

    $("#range1").on('input', function(){
        $("#mass_range").html((parseFloat($("#range1").val()) / 10).toFixed(2));
        $("#range2").val((parseFloat($("#mass_range").html()) / parseFloat(denisty_obj[currentMaterial])).toFixed(2) * 10);
        $("#volume_range").html((parseFloat($("#mass_range").html()) / parseFloat(denisty_obj[currentMaterial])).toFixed(2));

        $("#wood").attr("width", 100 * Math.pow(parseFloat($("#volume_range").html()/5), 1/3));
        $("#wood").attr("height", $("#woodheader").parent().attr("width"));

        if(document.getElementById("wood").getBoundingClientRect().bottom + parseFloat($("#wood").attr("height")) > parseFloat(815)){
            $("#wood").attr("y", parseFloat(815) - parseFloat($("#wood").attr("height")));
        }

        pieceHeight = document.getElementById("wood").getBoundingClientRect().height;
        console.log(ma_obj[currentMaterial], dec_obj[currentMaterial], inc_obj[currentMaterial]);
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    });

    $("#range2").on('input', function(){
        $("#volume_range").html((parseFloat($("#range2").val()) / 10).toFixed(2));
        $("#range1").val((parseFloat($("#volume_range").html()) * parseFloat(denisty_obj[currentMaterial])).toFixed(2) * 10);
        $("#mass_range").html((parseFloat($("#volume_range").html()) * parseFloat(denisty_obj[currentMaterial])).toFixed(2));

        $("#woodheader").parent().attr("width", 100 * Math.pow(parseFloat($("#volume_range").html()/5), 1/3));
        $("#woodheader").parent().attr("height", $("#woodheader").parent().attr("width"));

        if(document.getElementById("wood").getBoundingClientRect().bottom + parseFloat($("#wood").attr("height")) > parseFloat(815)){
            $("#wood").attr("y", parseFloat(815) - parseFloat($("#wood").attr("height")));
        }

        pieceHeight = document.getElementById("wood").getBoundingClientRect().height;
        console.log(ma_obj[currentMaterial], dec_obj[currentMaterial], inc_obj[currentMaterial]);
        amp = 1;
        clearInterval(myTimer);
        myTimer = setInterval(fall_wood_interval, 10);
    });
});

function fall_wood_interval(){
    assets.wood.gravitySpeed += getGravity();
    assets.wood.gravitySpeed *= 0.98 * ma_obj[currentMaterial];

    if(!(document.getElementById("wood").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top) && !(document.getElementById("wood").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top)){
        assets.wood.gravitySpeed *= 0.99;
        amp = amp * 0.99;
    }
    if((parseFloat($("#wood").attr("y")) + assets.wood.gravitySpeed) <= (parseFloat(815) - parseFloat($("#wood").attr("height")))){
        $("#wood").attr("y", parseFloat($("#wood").attr("y")) + assets.wood.gravitySpeed);
    }

    if(Math.abs(assets.wood.gravitySpeed) < 0.0009){
        clearInterval(myTimer);
    }
}
var positive = 0.3;
var negative = 0.1; //set negative = 0 and gravity speed increase will be the stone or metal
function getGravity(){
    put_height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;

    if(document.getElementById("wood").getBoundingClientRect().top >= document.getElementById("water").getBoundingClientRect().top){
        put_height = document.getElementById("wood").getBoundingClientRect().height;
    }
    if(document.getElementById("wood").getBoundingClientRect().bottom <= document.getElementById("water").getBoundingClientRect().top){
        put_height = 0;
    }

    Water_Change(put_height);

    if(document.getElementById("wood").getBoundingClientRect().bottom < document.getElementById("water").getBoundingClientRect().top){
        // $("#water-level").children("div").html(100 + " L");
        return inc_obj[currentMaterial];
    }

    if(document.getElementById("wood").getBoundingClientRect().top > document.getElementById("water").getBoundingClientRect().top){
        return -dec_obj[currentMaterial] * amp;
    }
    
    return  (inc_obj[currentMaterial] - (inc_obj[currentMaterial] + dec_obj[currentMaterial]) * put_height / pieceHeight) * amp;
}

var initial_WL = 100;

function Water_Change(height){
    var curH = document.getElementById("wood").getBoundingClientRect().height;
    var HH = (Math.pow(parseFloat(curH).toFixed(3) / 91.378, 1/3)).toFixed(1);
    var moveH = height / 2;
    // console.log(HH);
    // var moveL = moveH * HH;
    var moveL = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    
    var objHeight = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("wood").getBoundingClientRect().top;
    if(moveL < 0) moveL = 0;
    if(moveL > objHeight) moveL = objHeight;

    moveL = parseFloat($("#volume_range").html()) * moveL / objHeight;

    $(".st194").attr("transform","translate(0, -" + moveH + ")");
    $("#SVGID_5_").parent().attr("transform","translate(0, -" + moveH + ")");
    $(".st48").attr("transform","translate(0, -" + moveH + ")");

    $("#water-level").attr("transform","translate(0, -" + moveH+ ")");
    // $("#water-level").children("div").html((100 + Math.pow(parseFloat($("#wood").attr("height"))/100, 1/3) * (height / 2)).toFixed(2) + " L");
    // $("#water-level").children("div").html((((parseFloat(100) + moveL)).toFixed(2)) + " L");
    $("#water-level").children("div").html(Math.round(parseFloat(100) + moveL) + " L");
}

function dragElement(elmnt) {

  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
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

    // put_height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // if((document.getElementById("wood").getBoundingClientRect().top <= document.getElementById("water").getBoundingClientRect().top) && (document.getElementById("wood").getBoundingClientRect().bottom >= document.getElementById("water").getBoundingClientRect().top)){
    //     put_height = document.getElementById("wood").getBoundingClientRect().bottom - document.getElementById("water").getBoundingClientRect().top;
    // }
    getGravity();
    // Water_Change(put_height);
  }

  function closeDragElement() {
    amp = 1;
    myTimer = setInterval(fall_wood_interval, 10);

    document.onmouseup = null;
    document.onmousemove = null;
    
  }
}

//0, 177   641 685   transform="translate(100, 100)"