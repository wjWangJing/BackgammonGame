var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
	context.strokeStyle = "#8E9595";
var flag = true;
var boardArr = [];
for(var i = 0; i < 15; i++){
    boardArr[i] = [];
    for(var j = 0; j < 15; j++){
        boardArr[i][j] = 0;
    }
}

drawBoard();

canvas.onclick = function(event){
    event = event || window.event;
    var x = event.offsetX;
    var y = event.offsetY;
    var i = Math.floor(x / 40);
    var j = Math.floor(y / 40);
    if(boardArr[i][j] == 0){
        drawPiece(i,j,flag);
        boardArr[i][j] = 1;
        flag = !flag;
    }
};

// 画棋盘
function drawBoard(){
    for(var i = 0;i < 15; i++){
        context.moveTo(20 + i * 40, 20);
        context.lineTo(20 + i * 40, 580);
        context.moveTo(20,20 + i * 40);
        context.lineTo(580,20 + i * 40);
        context.stroke();
    }
}

// 画棋子
function drawPiece (i,j,flag){
    var grd=context.createRadialGradient(20 + i * 40 + 3,20 + j * 40 - 3,20,20 + i * 40 + 3,20 + j * 40 - 3,0);
    if(flag){
        grd.addColorStop(0,"#0a0a0a");
        grd.addColorStop(1,"#636766");
    }else{
        grd.addColorStop(0,"#d1d1d1");
        grd.addColorStop(1,"#F6F6F6");
    }
    context.fillStyle=grd;
    context.beginPath();
    context.arc(20 + i * 40,20 + j * 40,20,0,Math.PI*2);
    context.closePath();
    context.fill();
}

