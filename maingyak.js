//hét napjai és qualitis
let weekDay = new Date().getDay();
let maiNap = document.querySelector("span#dayname");


switch (weekDay) {
  case 0: dayName = "Vasárap", qualitys = "Munkaszüneti nap";
    break;
  case 1: dayName = "Hétfő", qualitys = "Zsuzska";
    break;
  case 2: dayName = "Kedd", qualitys = "Adri";
    break;
  case 3: dayName = "Szerda", qualitys = "Robi";
    break;
  case 4: dayName = "Csütörtök", qualitys = "Martin vagy Gábor";
    break;
  case 5: dayName = "Péntek", qualitys = "Éva";
    break;
  case 6: dayName = "Szombat", qualitys = "Pihenő nap";
    break;
  default: dayName = "unknown", qualitys = "Error";
}


//hónapok

let monats = new Date().getMonth();

switch (monats) {
  case 0: monat = "Január";
    break;
  case 1: monat = "Február";
    break;
  case 2: monat = "Március";
    break;
  case 3: monat = "Április";
    break;
  case 4: monat = "Május";
    break;
  case 5: monat = "Június";
    break;
  case 6: monat = "Július";
    break;
  case 7: monat = "Augusztus";
    break;
  case 8: monat = "Szeptember";
    break;
  case 9: monat = "Október";
    break;
  case 10: monat = "November";
    break;
  case 11: monat = "December";
    break;
  default: monat = "unknown"
}

function kiiras () {
  maiNap.innerHTML = monat + " hónap van " + dayName + "-i nap, ma " + qualitys + " a qualitiző kolléga!";
}

function login() {
	let email = document.querySelector("input[id='exampleInputEmail1']");
	let pass = document.querySelector("input[id='exampleInputPassword1']");
	let sucess = document.querySelector("span.show-smiley");
	
	if (email.value != "elekesemese@gmail.com" || email.value == "") {
		alert("Nincs ilyen email címmel regisztrált felhasználónk!");
	} else {
		bejelentkezes();
	}

	function bejelentkezes() {
		if (pass.value != "kardhal" || pass.value =="") {
			alert("Hibás jelszó!");
		} else {
      sucess.innerHTML = "Ön sikeresen bejelentkezett!";
      kiiras ();
		}
	}

}

let hetnapjai = [
  "Hétfő",
  "Kedd",
  "Szerda",
  "Csütörtök",
  "Péntek"
];

let hetnapjaiSelect = document.querySelector("#topInput");
let index = 0;
while (index < hetnapjai.length) {
  let option = document.createElement("option");
  option.value = index;
  option.innerHTML = hetnapjai[index];
  hetnapjaiSelect.appendChild(option);
  index++;
}

function napvalasztas() {
  /* if (hetnapjaiSelect.value == "0") {
    console.log("Hétfő");
  }
  if (hetnapjaiSelect.value == "1") {
    console.log("Kedd");
  }
  if (hetnapjaiSelect.value == "2") {
    console.log("Szerda");
  }   */

  for ( d= 0; d < hetnapjaiSelect.length; d++ )
    
}
