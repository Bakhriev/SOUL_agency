document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth > 480) {
		forDesktop();
	} else {
		console.log('mobile');

		forMobile();
	}
});

const forDesktop = () => {
	gsap.registerPlugin(ScrollTrigger);

	// ScrollTrigger для секции .why-us
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.why-us',
			start: 'top top',
			end: 'bottom+=800px',
			pin: true,
			pinSpacing: true,
			scrub: true,
			markers: true,
		},
	});

	// Анимация элементов внутри секции
	tl.to('.text-block:nth-child(1) .text-block__body', { x: -674, opacity: 0 });

	tl.to('.text-block:nth-child(2) .text-block__body', { x: -674 }, 0);
	tl.to('.text-block:nth-child(2) .text-block__img', { x: -630 }, 0);

	tl.to('.text-block:nth-child(3) .text-block__img', { x: -674 }, 0);
	tl.to('.text-block:nth-child(3) .text-block__body', { x: -674 }, 0);

	tl.to('.text-block:nth-child(2) .text-block__body', { x: -1348, opacity: 0 });
	tl.to('.text-block:nth-child(3) .text-block__body', { x: -1348 }, 0.5);
	tl.to('.text-block:nth-child(3) .text-block__img', { x: -1260 }, 0.5);

	// Привязка .gradient к секции
	gsap.to('.gradient', {
		yPercent: 100, // процентное значение, чтобы градиент двигался вместе с секцией
		ease: 'none',
		scrollTrigger: {
			trigger: '.why-us',
			start: 'top top',
			end: 'bottom+=800px',
			scrub: true,
		},
	});
};

const forMobile = () => {
	gsap.registerPlugin(ScrollTrigger);

	// ScrollTrigger для секции .why-us
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: '.why-us',
			start: 'top top',
			end: 'bottom+=400px',
			pin: true,
			pinSpacing: true,
			scrub: true,
			markers: true,
		},
	});

	// Анимация элементов внутри секции
	tl.to('.text-block:nth-child(1) .text-block__body', { x: -240, opacity: 0 });

	tl.to('.text-block:nth-child(2) .text-block__body', { x: -262 }, 0);
	tl.to('.text-block:nth-child(2) .text-block__img', { x: -240 }, 0);

	tl.to('.text-block:nth-child(3) .text-block__img', { x: -240 }, 0);
	tl.to('.text-block:nth-child(3) .text-block__body', { x: -240 }, 0);

	tl.to('.text-block:nth-child(2) .text-block__body', { x: -480, opacity: 0 });
	tl.to('.text-block:nth-child(3) .text-block__body', { x: -525 }, 0.5);
	tl.to('.text-block:nth-child(3) .text-block__img', { x: -480 }, 0.5);

	// Привязка .gradient к секции
	gsap.to('.gradient', {
		yPercent: 100, // процентное значение, чтобы градиент двигался вместе с секцией
		ease: 'none',
		scrollTrigger: {
			trigger: '.why-us',
			start: 'top top',
			end: 'bottom+=400px',
			scrub: true,
		},
	});
};
