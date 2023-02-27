// Homework 6 JS Code

// creating constant visualization dimenions
const FRAME_HEIGHT = 600;
const FRAME_WIDTH = 600;
const MARGINS = {left: 50, right: 50, top: 50, bottom: 50};

const VIS_HEIGHT = FRAME_HEIGHT - MARGINS.top - MARGINS.bottom;
const VIS_WIDTH = FRAME_WIDTH - MARGINS.left - MARGINS.right;

// create frame for scatterplot
const FRAME1 = d3.select('.col1')
				.append('svg')
					.attr('height', FRAME_HEIGHT)
					.attr('width', FRAME_HEIGHT)
					.attr('class', "frame")
                    .attr('id', "FRAME1");

// read in scatter data
d3.csv('data/iris.csv').then((data) => { // NOT WORKING says file not found

    // set max values for scaling
	const MAX_X = d3.max(data, (d) => {
								return d.Petal_Length
							});
    const MAX_Y = d3.max(data, (d) => {
								return d.Sepal_Length
							});

    // scaling functions
	const xscale = d3.scaleLinear()
            .domain([0, (MAX_X + 1)])
            .range([0, VIS_WIDTH]);
    const yscale = d3.scaleLinear()
            .domain([(MAX_Y + 1), 0])
            .range([0, VIS_HEIGHT]);


    // plotting points onto frame with size and positional attributes
	FRAME1.selectAll('points')
			.data(data)
			.enter()
			.append('circle')
				.attr('cx', (d) => {
					return (xscale(d.Petal_Length) + MARGINS.left)
				})
				.attr('cy', (d) => {
					return (yscale(d.Sepal_length) + MARGINS.top)
				})
				.attr('r', 10)
				.attr('class', 'point');

    // create x and y axes
	FRAME1.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
												+ (MARGINS.top + VIS_HEIGHT) +')')
			.call(d3.axisBottom(xscale))
				.attr('font-size', '20px');

    FRAME1.append('g')
            .attr('transform', 'translate(' + MARGINS.left + ',' 
                                                    + MARGINS.top +')')
            .call(d3.axisLeft(yscale))
                    .attr('font-size', '20px');
});