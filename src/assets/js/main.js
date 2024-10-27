// document.addEventListener('DOMContentLoaded', () => {
// 	gsap.registerPlugin(ScrollTrigger);

// 	const tl = gsap.timeline({
// 		scrollTrigger: {
// 			trigger: '.why-us',
// 			start: 'center 40%',
// 			end: '+=800px',

// 			pin: true,
// 			scrub: true,
// 			markers: true,
// 		},
// 	});
// 	// 1 period
// 	tl.to('.text-block:nth-child(1) .text-block__body', { x: -674, opacity: 0 });

// 	// 2 period
// 	tl.to('.text-block:nth-child(2) .text-block__body', { x: -674 }, 0);
// 	tl.to('.text-block:nth-child(2) .text-block__img', { x: -630 }, 0);

// 	tl.to('.text-block:nth-child(3) .text-block__img', { x: -674 }, 0);
// 	tl.to('.text-block:nth-child(3) .text-block__body', { x: -674 }, 0);

// 	// 3 period
// 	tl.to('.text-block:nth-child(2) .text-block__body', { x: -1348 });

// 	tl.to('.text-block:nth-child(3) .text-block__body', { x: -1348 }, 0.5);
// 	tl.to('.text-block:nth-child(3) .text-block__img', { x: -1260 }, 0.5);
// });
