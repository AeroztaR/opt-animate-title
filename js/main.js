let tl = new TimelineMax();

tl
	.from( $('.logo__u'), 1.5, {
		y: -30
	} )
	.from( $('.logo__p'), 1.5,{
		rotation: 14,
		transformOrigin: "100% 50%"
	},"-=1.5")
	.from( $('.logo__i'), 1.5, {
		y: "100%"
	},"-=1.5")
	.from( $('.logo__m-top'), 1.5, {
		x: "20%"
	},"-=1.5")
	.from( $('.logo__m-bottom'), 2, {
		y: "-100%"
	},"-=1.5");