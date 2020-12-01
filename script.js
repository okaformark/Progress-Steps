const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
const actives = document.querySelectorAll('.active');

let active = 1;

const update = () => {
	circles.forEach((circle, index) => {
		if (index < active) circle.classList.add('active');
		else circle.classList.remove('active');
	});

	const percent = ((actives.length - 1) / (circles.length - 1)) * 100 + '%';
	progress.style.width = percent;

	if (active === 1) prev.disabled = true;
	else if (active === circles.length) next.disabled = true;
	else {
		prev.disabled = false;
		next.disabled = false;
	}
};
next.addEventListener('click', () => {
	active++;
	if (active > circles.length) active = circles.length;
	update();
});

prev.addEventListener('click', () => {
	active--;
	if (active < 1) active = 1;
	update();
});
