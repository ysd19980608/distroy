window.onload = function(){
	
	var obook1 = document.getElementById('book1');
	var obook2 = document.getElementById('book2');
	var otbody = document.getElementById('goods');
	var row = otbody.insertRow();
	var temp = 1;
	//为三个按钮添加不同的点击事件
	obook1.onclick = function(){
		var num = 19.8;
		row.innerHTML=row.innerHTML+"<td align='center'>十个人快乐大搬家</td>"+
				"<td align='center'>19.8</td>"+
				"<td align='center'>"+
				"<input type='button' value='-' id='jian01' />"+
				"<input id='text01' type='text' size='1' value='1' readonly='readonly' />"+
				"<input type='button' value='+' id='add01' />"+
				"</td>"+
				"<td align='center' id='sum01'>19.8</td>"+
				"<td align='center'>"+
					"<input id='del01' type='button' value='X' '/>"+
				"</td>"+
				"</tr>";
		var ojian = document.getElementById('jian01');
		var ojia = document.getElementById("add01")
		var otext = document.getElementById('text01')
		var osum = document.getElementById("sum01");
		var odel = document.getElementById('del01');
		//增减按钮效果实现 	
		
		//减少
		ojian.onmousedown = function(){
			temp -= 1;
			//最小为0
			if (temp <= 0) {
				temp = 0;
			}
			otext.value = temp;
			num = temp*19.8;
			osum.innerHTML = num.toFixed(1);
		}
		ojia.onmousedown = function() {
			temp += 1;
			otext.value = temp;
			num = temp*19.8;
			osum.innerHTML = num.toFixed(1);
		}
		//删除节点
		odel.onclick = function(){
			otbody.removeChild(row);
		}
	
	}
}