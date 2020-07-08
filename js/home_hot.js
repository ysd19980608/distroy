
window.onload = function() {
	var oul1 = document.getElementById("ul1");
	var odiv1 = document.getElementById("hotbook");
	/* 
		直接把图片添加到末尾
	 */
	oul1.innerHTML += oul1.innerHTML;
	oul1.style.width = 240 * 12 + "px";

	setInterval(function() {
		startMove(oul1, {
			left: oul1.offsetLeft - 240,

		}, function() {
			if (oul1.offsetLeft <= -oul1.offsetWidth / 2) {
				oul1.style.left = "0px";
			}
		});
	}, 2000);
	
	oul1.onclick = function(){
		window.location.href = 'http://www.baidu.com'
	}
}

/* 
修改后的函数可支持同时进行多个变化
 */
//将函数当参数传递的函数叫回调函数
//startMove(odiv,"width",300,函数);
function startMove(node, cssObj, complete) {
	clearInterval(node.timer);
	node.timer = setInterval(function() {
		var isEnd = true //假设所有动画都到达了目的值
		//该for循环就是修改点，怎加这个for循环取出cssobj传入的参数
		for (var attr in cssObj) {
			var iTarget = cssObj[attr];
			//获取当前样式的值 
			var iCur = null;
			if (attr == "opacity") {
				iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
			} else {
				iCur = parseInt(getStyle(node, attr));
			}
			//判断速度
			var speed = (iTarget - iCur) / 8;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);


			if (attr == "opacity") {
				iCur += speed;
				node.style.opacity = iCur / 100;
				node.style.filter = `alpha(opacity=$(iCur))`;

			} else {
				node.style[attr] = iCur + speed + "px";
			}
			if (iCur != iTarget) {
				isEnd = false;
			}
		}
		//回调函数执行
		if (isEnd) {
			clearInterval(node.timer);
			if (complete) {
				complete.call(node);
			}
		}

	}, 30);
}

//获取当前样式跨浏览器兼容
function getStyle(node, cssStyle) {
	return node.currenStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}
