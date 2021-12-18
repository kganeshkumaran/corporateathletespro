const docStyle1 = document.getElementById("Anchor1").style
const docStyle2 = document.getElementById("Anchor2").style
const docStyle3 = document.getElementById("Anchor3").style
const docStyle4 = document.getElementById("Anchor4").style
const docStyle5 = document.getElementById("Anchor5").style
const docStyle6 = document.getElementById("Anchor6").style
const docStyle7 = document.getElementById("Anchor7").style
const docStyle8 = document.getElementById("Anchor8").style
const docStyle9 = document.getElementById("Anchor9").style
const docStyle10 = document.getElementById("Anchor10").style
const docStyle11 = document.getElementById("Anchor11").style
const docStyle12 = document.getElementById("Anchor12").style
const docStyle13 = document.getElementById("Anchor13").style

const aElem1 = document.getElementById('Anchor1')
const aElem2 = document.getElementById('Anchor2')
const aElem3 = document.getElementById('Anchor3')
const aElem4 = document.getElementById('Anchor4')
const aElem5 = document.getElementById('Anchor5')
const aElem6 = document.getElementById('Anchor6')
const aElem7 = document.getElementById('Anchor7')
const aElem8 = document.getElementById('Anchor8')
const aElem9 = document.getElementById('Anchor9')
const aElem10 = document.getElementById('Anchor10')
const aElem11 = document.getElementById('Anchor11')
const aElem12 = document.getElementById('Anchor12')
const aElem13 = document.getElementById('Anchor13')

const boundingClientRect1 = aElem1.getBoundingClientRect()
const boundingClientRect2 = aElem2.getBoundingClientRect()
const boundingClientRect3 = aElem3.getBoundingClientRect()
const boundingClientRect4 = aElem4.getBoundingClientRect()
const boundingClientRect5 = aElem5.getBoundingClientRect()
const boundingClientRect6 = aElem6.getBoundingClientRect()
const boundingClientRect7 = aElem7.getBoundingClientRect()
const boundingClientRect8 = aElem8.getBoundingClientRect()
const boundingClientRect9 = aElem9.getBoundingClientRect()
const boundingClientRect10 = aElem10.getBoundingClientRect()
const boundingClientRect11 = aElem11.getBoundingClientRect()
const boundingClientRect12 = aElem12.getBoundingClientRect()
const boundingClientRect13 = aElem13.getBoundingClientRect()

/*Button 1*/
aElem1.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect1.left
	const y = e.clientY - boundingClientRect1.top
	
	const xc = boundingClientRect1.width/2
	const yc = boundingClientRect1.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle1.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle1.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem1.onmouseleave = function(e) {
	
	docStyle1.setProperty('--ty', '0')
	docStyle1.setProperty('--rx', '0')
	docStyle1.setProperty('--ry', '0')
	
}

aElem1.onmousedown = function(e) {
	
	docStyle1.setProperty('--tz', '-25px')
	
}

document.body.onmouseup = function(e) {
	
	docStyle1.setProperty('--tz', '-12px')
	
}	

/*Button 2*/
aElem2.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect2.left
	const y = e.clientY - boundingClientRect2.top
	
	const xc = boundingClientRect2.width/2
	const yc = boundingClientRect2.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle2.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle2.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem2.onmouseleave = function(e) {
	
	docStyle2.setProperty('--ty', '0')
	docStyle2.setProperty('--rx', '0')
	docStyle2.setProperty('--ry', '0')
	
}

aElem2.onmousedown = function(e) {
	
	docStyle2.setProperty('--tz', '-25px')
	
}

document.body.onmouseup = function(e) {
	
	docStyle2.setProperty('--tz', '-12px')
	
}

/*Button 3*/
aElem3.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect3.left
	const y = e.clientY - boundingClientRect3.top
	
	const xc = boundingClientRect3.width/2
	const yc = boundingClientRect3.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle3.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle3.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem3.onmouseleave = function(e) {
	
	docStyle3.setProperty('--ty', '0')
	docStyle3.setProperty('--rx', '0')
	docStyle3.setProperty('--ry', '0')
	
}

aElem3.onmousedown = function(e) {
	
	docStyle3.setProperty('--tz', '-25px')
	
}	

document.body.onmouseup = function(e) {
	
	docStyle3.setProperty('--tz', '-12px')
	
}

/*Button 4*/
aElem4.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect4.left
	const y = e.clientY - boundingClientRect4.top
	
	const xc = boundingClientRect4.width/2
	const yc = boundingClientRect4.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle4.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle4.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem4.onmouseleave = function(e) {
	
	docStyle4.setProperty('--ty', '0')
	docStyle4.setProperty('--rx', '0')
	docStyle4.setProperty('--ry', '0')
	
}

aElem4.onmousedown = function(e) {
	
	docStyle4.setProperty('--tz', '-25px')
	
}

document.body.onmouseup = function(e) {
	
	docStyle4.setProperty('--tz', '-12px')
	}


/*Button 5*/
aElem5.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect5.left
	const y = e.clientY - boundingClientRect5.top
	
	const xc = boundingClientRect5.width/2
	const yc = boundingClientRect5.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle5.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle5.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem5.onmouseleave = function(e) {
	
	docStyle5.setProperty('--ty', '0')
	docStyle5.setProperty('--rx', '0')
	docStyle5.setProperty('--ry', '0')
	
}

aElem5.onmousedown = function(e) {
	
	docStyle5.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle5.setProperty('--tz', '-12px')
	}

/*Button 6*/
aElem6.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect6.left
	const y = e.clientY - boundingClientRect6.top
	
	const xc = boundingClientRect6.width/2
	const yc = boundingClientRect6.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle6.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle6.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem6.onmouseleave = function(e) {
	
	docStyle6.setProperty('--ty', '0')
	docStyle6.setProperty('--rx', '0')
	docStyle6.setProperty('--ry', '0')
	
}

aElem6.onmousedown = function(e) {
	
	docStyle6.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle6.setProperty('--tz', '-12px')
	}


/*Button 7*/
aElem7.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect7.left
	const y = e.clientY - boundingClientRect7.top
	
	const xc = boundingClientRect7.width/2
	const yc = boundingClientRect7.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle7.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle7.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem7.onmouseleave = function(e) {
	
	docStyle7.setProperty('--ty', '0')
	docStyle7.setProperty('--rx', '0')
	docStyle7.setProperty('--ry', '0')
	
}

aElem7.onmousedown = function(e) {
	
	docStyle7.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle7.setProperty('--tz', '-12px')
	}
	
/*Button 8*/
aElem8.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect8.left
	const y = e.clientY - boundingClientRect8.top
	
	const xc = boundingClientRect8.width/2
	const yc = boundingClientRect8.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle8.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle8.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem8.onmouseleave = function(e) {
	
	docStyle8.setProperty('--ty', '0')
	docStyle8.setProperty('--rx', '0')
	docStyle8.setProperty('--ry', '0')
	
}

aElem8.onmousedown = function(e) {
	
	docStyle8.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle8.setProperty('--tz', '-12px')
	}

/*Button 9*/
aElem9.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect9.left
	const y = e.clientY - boundingClientRect9.top
	
	const xc = boundingClientRect9.width/2
	const yc = boundingClientRect9.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle9.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle9.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem9.onmouseleave = function(e) {
	
	docStyle9.setProperty('--ty', '0')
	docStyle9.setProperty('--rx', '0')
	docStyle9.setProperty('--ry', '0')
	
}

aElem9.onmousedown = function(e) {
	
	docStyle9.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle9.setProperty('--tz', '-12px')
	}

/*Button 10*/
aElem10.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect10.left
	const y = e.clientY - boundingClientRect10.top
	
	const xc = boundingClientRect10.width/2
	const yc = boundingClientRect10.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle10.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle10.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem10.onmouseleave = function(e) {
	
	docStyle10.setProperty('--ty', '0')
	docStyle10.setProperty('--rx', '0')
	docStyle10.setProperty('--ry', '0')
	
}

aElem10.onmousedown = function(e) {
	
	docStyle10.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle10.setProperty('--tz', '-12px')
	}

/*Button 11*/
aElem11.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect11.left
	const y = e.clientY - boundingClientRect11.top
	
	const xc = boundingClientRect11.width/2
	const yc = boundingClientRect11.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle11.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle11.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem11.onmouseleave = function(e) {
	
	docStyle11.setProperty('--ty', '0')
	docStyle11.setProperty('--rx', '0')
	docStyle11.setProperty('--ry', '0')
	
}

aElem11.onmousedown = function(e) {
	
	docStyle11.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle11.setProperty('--tz', '-12px')
	}

/*Button 12*/
aElem12.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect12.left
	const y = e.clientY - boundingClientRect12.top
	
	const xc = boundingClientRect12.width/2
	const yc = boundingClientRect12.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle12.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle12.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem12.onmouseleave = function(e) {
	
	docStyle12.setProperty('--ty', '0')
	docStyle12.setProperty('--rx', '0')
	docStyle12.setProperty('--ry', '0')
	
}

aElem12.onmousedown = function(e) {
	
	docStyle12.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle12.setProperty('--tz', '-12px')
	}


/*Button 13*/
aElem13.onmousemove = function(e) {

	const x = e.clientX - boundingClientRect13.left
	const y = e.clientY - boundingClientRect13.top
	
	const xc = boundingClientRect13.width/2
	const yc = boundingClientRect13.height/2
	
	const dx = x - xc
	const dy = y - yc
	
	docStyle13.setProperty('--rx', `${ dy/-1 }deg`)
	docStyle13.setProperty('--ry', `${ dx/10 }deg`)
	
}

aElem13.onmouseleave = function(e) {
	
	docStyle13.setProperty('--ty', '0')
	docStyle13.setProperty('--rx', '0')
	docStyle13.setProperty('--ry', '0')
	
}

aElem13.onmousedown = function(e) {
	
	docStyle13.setProperty('--tz', '-25px')
	
}	
document.body.onmouseup = function(e) {
	
	docStyle13.setProperty('--tz', '-12px')
	}