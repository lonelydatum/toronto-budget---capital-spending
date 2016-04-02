export const Intro = (value) => {
	ga('send', 'event', 'capital-budget', 'intro', value);
}

export const Filter = (value) => {
	ga('send', 'event', 'capital-budget', 'filter', value);
}


export const Analytics = (a, b) => {

	ga('send', 'event', 'capital-budget', a, b);
}


export const ABC = (a, b, c) => {

	ga('send', 'event', 'capital-budget', a, b, c);
}

