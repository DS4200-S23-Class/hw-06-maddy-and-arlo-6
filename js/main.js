// Homework 6 JS Code

// creating constant visualization dimenions
const FRAME_HEIGHT = 400;
const FRAME_WIDTH = 400;
const MARGINS = {left: 40, right: 25, top: 25, bottom: 25};

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
					return (yscale(d.Sepal_Length) + MARGINS.top)
				})
				.attr('r', 10)
				.attr('opacity', '50%')
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

// create frame for scatterplot
const FRAME2 = d3.select('.col2')
				.append('svg')
					.attr('height', FRAME_HEIGHT)
					.attr('width', FRAME_HEIGHT)
					.attr('class', "frame")
                    .attr('id', "FRAME2");

// read in scatter data
d3.csv('data/iris.csv').then((data) => { // NOT WORKING says file not found

    // set max values for scaling
	const MAX_X = d3.max(data, (d) => {
								return d.Petal_Width
							});
    const MAX_Y = d3.max(data, (d) => {
								return d.Sepal_Width
							});

    // scaling functions
	const xscale = d3.scaleLinear()
            .domain([0, (MAX_X + 1)])
            .range([0, VIS_WIDTH]);
    const yscale = d3.scaleLinear()
            .domain([(MAX_Y + 1), 0])
            .range([0, VIS_HEIGHT]);


    // plotting points onto frame with size and positional attributes
	FRAME2.selectAll('points')
			.data(data)
			.enter()
			.append('circle')
				.attr('cx', (d) => {
					return (xscale(d.Petal_Width) + MARGINS.left)
				})
				.attr('cy', (d) => {
					return (yscale(d.Sepal_Width) + MARGINS.top)
				})
				.attr('r', 10)
				.attr('opacity', '50%')
				.attr('class', 'point');

    // create x and y axes
	FRAME2.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
												+ (MARGINS.top + VIS_HEIGHT) +')')
			.call(d3.axisBottom(xscale))
				.attr('font-size', '20px');

    FRAME2.append('g')
            .attr('transform', 'translate(' + MARGINS.left + ',' 
                                                    + MARGINS.top +')')
            .call(d3.axisLeft(yscale))
                    .attr('font-size', '20px');
});

const FRAME3 = d3.select('.col3')
				.append('svg')
					.attr('height', FRAME_HEIGHT)
					.attr('width', FRAME_HEIGHT)
					.attr('class', 'frame')
                    .attr('id', 'FRAME3');

// read in the bar chart data
d3.csv('data/iris.csv').then((data) => {

   // create scaling functions
    let xscale = d3.scaleBand()
						.domain(data.map((d)=>{return d.Species;}))
                        .range([0, VIS_WIDTH])
						.padding(0.4);
    let yscale = d3.scaleLinear()
						.domain([60, 0])
                        .range([0, VIS_HEIGHT]);

    // create x and y axes
	FRAME3.append('g')
		.attr('transform', 'translate(' + MARGINS.left + ',' 
										+ (MARGINS.top + VIS_HEIGHT) +')')
		.call(d3.axisBottom(xscale))
		.attr('font-size', '20px');

	FRAME3.append('g')
		.attr('transform', 'translate(' + MARGINS.left + ',' 
											+ MARGINS.top +')')
		.call(d3.axisLeft(yscale))
			.attr('font-size', '20px');

    // append all bars to chart 
    FRAME3.selectAll("bar")
        .data(data)
        .enter().append("rect")
        .attr("class","bar")
        .attr("x", (d) => {return xscale(d.Species) + MARGINS.left;})
        .attr("y", MARGINS.top + MARGINS.bottom)
        .attr("width", xscale.bandwidth())
        .attr("height", (d) => {return yscale(50) + MARGINS.left;});  
    });
