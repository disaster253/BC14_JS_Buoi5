//50 kw đầu 0 -> 50
const kw_1 = 500;
//50 kw kế 51-> 100
const kw_2 = 650;
//100kw kế 101 -> 200
const kw_3 = 850;
//150 kw kế 201 -> 350
const kw_4 = 1100;
//còn lại 351 ->
const kw_5 = 1300;

function elCal() {
	var fullName = document.getElementById("name").value;
	var valueKw = +document.getElementById("kW").value;
	var resultEL = document.getElementById("result");
	var total = 0;
	if (valueKw <= 50) {
		total = valueKw * kw_1;
		resultEL.innerHTML = "Tổng tiền điện của " + fullName + " là: " + total;
	} else if (valueKw <= 100) {
		total = 50 * kw_1 + ((valueKw - 50) * kw_2);
		resultEL.innerHTML = "Tổng tiền điện của " + fullName + " là: " + total;
	} else if (valueKw <= 200) {
		total = 50 * kw_1 + 50 * kw_2 + ((valueKw - 100) * kw_3);
		resultEL.innerHTML = "Tổng tiền điện của " + fullName + " là: " + total;
	} else if (valueKw <= 350) {
		total = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + ((valueKw - 200) * kw_4)
		resultEL.innerHTML = "Tổng tiền điện của " + fullName + " là: " + total;
	} else {
		total = 50 * kw_1 + 50 * kw_2 + 100 * kw_3 + 150 * kw_4 + ((valueKw - 350) * kw_5);
		resultEL.innerHTML = "Tổng tiền điện của " + fullName + " là: " + total;
	}
}