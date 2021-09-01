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
    NOW_BLOCK.shape = 0;
    displayBlock(NOW_BLOCK);
});

function displayBlock(nowblock) {  //원하는 블럭(nowblock)을 원하는 위치에 출력
    //ALL_BLOCK[nowblock.shape]
    for(var i=0; i < ALL_BLOCK[nowblock.shape][BLOCK_POSITION_SHAPE].length; i++) {
        // ALL_BLOCK[nowblock.shape][0]  ->   "0:0"
        var block_xy = ALL_BLOCK[nowblock.shape][BLOCK_POSITION_SHAPE][i].split(":");
        var block_x  = Number(block_xy[0]) + 5;
        var block_y  = Number(block_xy[1]) + 1;

        $("#" + block_x + "_" + block_y).attr("class", "block");
    }
    
}