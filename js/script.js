let pick = document.getElementById('pick')
let imgPick = document.getElementById('img_pick')
let pickOne = document.getElementById('txt_pick_one')
let pickTwo = document.getElementById('txt_pick_two')
let pickThree = document.getElementById('txt_pick_three')
let pickFour = document.getElementById('txt_pick_four')
let pickFive = document.getElementById('txt_pick_five')

function clicked(){
	pick.style.backgroundColor = 'black'
	imgPick.setAttribute('src', 'img/pick_white.svg')

}

imgPick.addEventListener('click', clicked)