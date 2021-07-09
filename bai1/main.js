//  SCORE
const area_A = 2;
const area_B = 1;
const area_C = 0.5;
const object_1 = 2.5;
const object_2 = 1.5;
const object_3 = 1;
function calPoint() {
	var p1 = +document.getElementById("point1").value;
	var p2 = +document.getElementById("point2").value;
	var p3 = +document.getElementById("point3").value;
	var pCheck = +document.getElementById("pointCheck").value;
	var areaCheck = document.getElementById("area").value;
	var objectCheck = +document.getElementById("object").value;
	var point = parseFloat(p1 + p2 + p3);
	var totalPoint = 0;
	var resultEL = document.getElementById("result");
	var resultPoint = document.getElementById("resultPoint");
	function checkPoint() {
		if (totalPoint >= pCheck) {
			resultPoint.innerHTML = "Bạn đã đậu";
		} else if (p1 == 0 || p2 == 0 || p3 == 0) {
			resultPoint.innerHTML = "Bạn đã rớt vì có môn 0đ";
		} else {
			resultPoint.innerHTML = "Bạn đã rớt";
		}
	}
	if (areaCheck == 'A') {
		switch (objectCheck) {
			case 0:
				totalPoint = parseFloat(point + area_A);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 1:
				totalPoint = parseFloat(point + object_1 + area_A);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 2:
				totalPoint = parseFloat(point + object_2 + area_A);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 3:
				totalPoint = parseFloat(point + object_3 + area_A);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
		}
	} else if (areaCheck == 'B') {
		switch (objectCheck) {
			case 0:
				totalPoint = parseFloat(point + area_B);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 1:
				totalPoint = parseFloat(point + object_1 + area_B);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 2:
				totalPoint = parseFloat(point + object_2 + area_B);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 3:
				totalPoint = parseFloat(point + object_3 + area_B);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
		}
	} else if (areaCheck == 'C') {
		switch (objectCheck) {
			case 0:
				totalPoint = parseFloat(point + area_C);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 1:
				totalPoint = parseFloat(point + object_1 + area_C);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 2:
				totalPoint = parseFloat(point + object_2 + area_C);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 3:
				totalPoint = parseFloat(point + object_3 + area_C);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
		}
	} else if (areaCheck == 'X') {
		switch (objectCheck) {
			case 0:
				totalPoint = parseFloat(point);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 1:
				totalPoint = parseFloat(point + object_1);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 2:
				totalPoint = parseFloat(point + object_2);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
			case 3:
				totalPoint = parseFloat(point + object_3);
				resultEL.innerHTML = "Tổng điểm 3 môn là: " + totalPoint;
				checkPoint();
				break;
		}
	}

}




