var ALL_BLOCK = new Array();
var BLOCK_POSITION_SHAPE = 0; //동일한 블록 내에서의 각도 형태
ALL_BLOCK[0] = [["0:0", "1:0", "2:0", "3:0"],["0:0", "0:1", "0:2", "0:3"]];
ALL_BLOCK[1] = [["0:0", "0:1", "1:1"],["0:1", "0:0", "1:0"],["0:0", "1:0", "1:1"],["1:0", "0:1", "1:1"]];
ALL_BLOCK[2] = [["0:1", "1:1", "1:0"],["0:-1", "0:0", "1:0"],["0:1", "0:0", "1:0"],["0:-1", "1:-1", "1:0"]];
ALL_BLOCK[3] = [["0:1", "1:1", "2:1", "0:0"],["0:1", "0:0", "0:-1", "1:-1"],["0:-2", "1:-2", "2:-2", "2:-1"],["0:0", "0:1", "-1:2", "0:2"]];
ALL_BLOCK[4] = [["0:1", "1:1", "2:1", "2:0"],["1:-1", "1:0", "1:1", "2:1"],["-1:1", "-1:0", "0:0", "1:0"],["0:-1", "1:-1", "1:0", "1:1"]];
ALL_BLOCK[5] = [["1:1", "2:1", "1:0", "2:0"]];   

var ALL_TD = [];
function makeBlock(col, row) {
    for(var i=1; i <= row; i++) { //세로
        document.write("<tr>");
        var X_array = [];
        for(var j=1; j <= col; j++) { //가로
            var block_html = `
                <td class="space" id="${j}_${i}" x="${j}" y="${i}">
                </td>
            `;
            document.write(block_html);
            X_array.push(j + "_" + i);
        }
        document.write("</tr>");                        
        ALL_TD.push(X_array);
    }
}


var NOW_BLOCK = new Object();
NOW_BLOCK.shape = null;  //현재 블록 형태
NOW_BLOCK.current_blocks = null;  //현재 블록의 위치를 저장
$(document).ready(function(){
    //메모리 적재 시기에 작동
    newBlock();
});

//랜덤 숫자 생성 함수
function rand(min, max) {
    //Math.random() : 0~1사이의 숫자를 랜덤하게 가지고 오는 자바스크립트 함수
    //Math.floor : 소수점 자리를 버려서 정수로 만듬
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function newBlock() {
    //랜덤하게 가지고 올 것
    NOW_BLOCK.shape = 5;
    displayBlock(NOW_BLOCK);
}

var INIT_X_POSITION = 5; //초기 블록의 x위치값
var INIT_Y_POSITION = 1; //초기 블록의 y위치값
function displayBlock(nowblock) {  //원하는 블럭(nowblock)을 원하는 위치에 출력
    //ALL_BLOCK[nowblock.shape]
    for(var i=0; i < ALL_BLOCK[nowblock.shape][BLOCK_POSITION_SHAPE].length; i++) {
        // ALL_BLOCK[nowblock.shape][0]  ->   "0:0"
        var block_xy = ALL_BLOCK[nowblock.shape][BLOCK_POSITION_SHAPE][i].split(":");
        var block_x  = Number(block_xy[0]) + INIT_X_POSITION;
        var block_y  = Number(block_xy[1]) + INIT_Y_POSITION;

        $("#" + block_x + "_" + block_y).attr("class", "block");
    }
    
}