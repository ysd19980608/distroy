//获取相关元素
var bannerpic = document.getElementById("bannerpic");
var banbox = document.getElementById("box");
var lis1 = document.getElementById("li1");
var lis2 = document.getElementById("li2");
var lis3 = document.getElementById("li3");
var lis4 = document.getElementById("li4");
var lis5 = document.getElementById("li5");
var banlbt = document.getElementById("banlbt")
//存储图片的数组
var picarr = ["img/img1.png", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg", "img/img5.jpg"];
//存放li小圆点的数组
var liarr = [lis1, lis2, lis3, lis4, lis5];
//设置切换图片的初始索引
var idex = 0;
//图片自动切换
var timer = setInterval(slide, 3000);

function slide() {
	idex++;
	if (idex == picarr.length) {
		idex = 0;
	}
	bannerpic.src = picarr[idex];
	//增加小圆点切换效果
	liarr[idex].classList.remove("on"); //删去li的on效果  
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}

	}
}
//鼠标滑过容器，轮播图暂停，离开的话继续
banlbt.onmouseover = function() {
	clearInterval(timer);
}
banlbt.onmouseout = function() {
	timer = setInterval(slide, 3000);
}
//小圆点点击切换效果
lis1.onclick = function() { //为lis1增加点击效果
	idex = 0; //修改idex的值防止timer冲突
	bannerpic.src = picarr[idex]; //改变轮播图
	liarr[idex].classList.remove("on"); //删去li的on效果
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}
	}

}
lis2.onclick = function() {
	idex = 1;
	bannerpic.src = picarr[idex];
	liarr[idex].classList.remove("on"); //删去li的on效果
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}

	}

}
lis3.onclick = function() {
	idex = 2;
	bannerpic.src = picarr[idex];
	liarr[idex].classList.remove("on"); //删去li的on效果
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}

	}
}
lis4.onclick = function() {
	idex = 3;
	bannerpic.src = picarr[idex];
	liarr[idex].classList.remove("on"); //删去li的on效果
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}

	}
}
lis5.onclick = function() {
	idex = 4;
	bannerpic.src = picarr[idex];
	liarr[idex].classList.remove("on"); //删去li的on效果
	for (var i = 0; i < liarr.length; i++) { //循环为不包括idex的li增加on效果
		if (i != idex) {
			liarr[i].classList.add("on");
		}

	}
}
