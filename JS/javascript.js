const openMasInfoButtons = document.querySelectorAll('[data-pop-target')
const closeMasInfoButtons = document.querySelectorAll('[data-close-button')
const overlay = document.getElementById('overlay')

openMasInfoButtons.forEach(button => {
	button.addEventListener('click', ()=> {
		const pop = document.querySelector(button.dataset.popTarget)
		openPop(pop)
	})
})

overlay.addEventListener('click', () => {
	const pop = document.querySelectorAll('pop.active')
	pop.forEach(pop => {
		closePop(pop)
	})
})

closeMasInfoButtons.forEach(button => {
	button.addEventListener('click', () => {
		const pop = button.closest('.pop')
		closePop(pop)
	})
})


function openPop(pop) {
	if(pop == null) return
	pop.classList.add('active')
	overlay.classList.add('active')
}

function closePop(pop) {
	if(pop == null) return
		pop.classList.remove('active')
		overlay.classList.remove('active')
}

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () =>{
	const currentScroll = window.pageYOffset
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up")
	}
	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up")
		body.classList.add("scroll-down")
	}
	if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-down")
		body.classList.add("scroll-up")
	}
	lastScroll =  currentScroll;  
})