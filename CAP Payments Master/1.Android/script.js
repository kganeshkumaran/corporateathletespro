const docStyle1 = document.getElementById("Anchor1").style
const docStyle2 = document.getElementById("Anchor2").style
const docStyle3 = document.getElementById("Anchor3").style
const docStyle4 = document.getElementById("Anchor4").style

const aElem1 = document.getElementById('Anchor1')
const aElem2 = document.getElementById('Anchor2')
const aElem3 = document.getElementById('Anchor3')
const aElem4 = document.getElementById('Anchor4')

const boundingClientRect1 = aElem1.getBoundingClientRect()
const boundingClientRect2 = aElem2.getBoundingClientRect()
const boundingClientRect3 = aElem3.getBoundingClientRect()
const boundingClientRect4 = aElem4.getBoundingClientRect()


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
	
