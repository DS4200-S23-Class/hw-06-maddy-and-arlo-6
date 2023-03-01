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
d3.csv('data/iris.csv').then((data) => { 

	// set max values for scaling
	const MAX_X = d3.max(data, (d) => {
								return d.Petal_Length
							});
	const MAX_Y = d3.max(data, (d) => {
								return d.Sepal_Length
							});
	const color = (d) => {return d.Species};

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
				.attr('class', color);

	// create x and y axes
	FRAME1.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
												+ (MARGINS.top + VIS_HEIGHT) +')')
			.call(d3.axisBottom(xscale))
				.attr('font-size', '10px');

	FRAME1.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
													+ MARGINS.top +')')
			.call(d3.axisLeft(yscale))
					.attr('font-size', '10px');

	FRAME1.append('text')
		.attr('transform', 'translate(' + MARGINS.left + ')')
		.attr('x', VIS_WIDTH/2)
		.attr('y', MARGINS.top / 2)
		.attr('text-anchor', 'middle')
		.attr('class', 'header')
		.text('Petal Length vs Sepal Length');
});

// create frame for scatterplot
const FRAME2 = d3.select('.col2')
				.append('svg')
					.attr('height', FRAME_HEIGHT)
					.attr('width', FRAME_HEIGHT)
					.attr('class', "frame")
					.attr('id', "FRAME2");
	
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

	const color = (d) => {return d.Species}
	// create x and y axes
	FRAME3.append('g')
		.attr('transform', 'translate(' + MARGINS.left + ',' 
										+ (MARGINS.top + VIS_HEIGHT) +')')
		.call(d3.axisBottom(xscale))
		.attr('font-size', '10px');

	FRAME3.append('g')
		.attr('transform', 'translate(' + MARGINS.left + ',' 
											+ MARGINS.top +')')
		.call(d3.axisLeft(yscale))
			.attr('font-size', '10px');

	// append all bars to chart 
	FRAME3.selectAll("bar")
		.data(data)
		.enter().append("rect")
		.attr("class", color)
		.attr("x", (d) => {return xscale(d.Species) + MARGINS.left;})
		.attr("y", (d) => {return 83})
		.attr("width", xscale.bandwidth())
		.attr("height", (d) => {return VIS_HEIGHT - yscale(50)});
		

	FRAME3.append('text')
		.attr('transform', 'translate(' + MARGINS.left + ')')
		.attr('x', VIS_WIDTH/2)
		.attr('y', MARGINS.top / 2)
		.attr('text-anchor', 'middle')
		.attr('class', 'header')
		.text('Counts by Species');
	});


// read in scatter data
d3.csv('data/iris.csv').then((data) => { // NOT WORKING says file not found

	// set max values for scaling
	const MAX_X = d3.max(data, (d) => {
								return d.Petal_Width
							});
	const MAX_Y = d3.max(data, (d) => {
								return d.Sepal_Width
							});

	const color = (d) => {return d.Species};

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
				.attr('class', color);

	// create x and y axes
	FRAME2.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
												+ (MARGINS.top + VIS_HEIGHT) +')')
			.call(d3.axisBottom(xscale))
				.attr('font-size', '10px');

	FRAME2.append('g')
			.attr('transform', 'translate(' + MARGINS.left + ',' 
													+ MARGINS.top +')')
			.call(d3.axisLeft(yscale))
					.attr('font-size', '10px');

	FRAME2.append('text')
		.attr('transform', 'translate(' + MARGINS.left + ')')
		.attr('x', VIS_WIDTH/2)
		.attr('y', MARGINS.top / 2)
		.attr('text-anchor', 'middle')
		.attr('class', 'header')
		.text('Pedal Width vs Sepal Width');

	FRAME2.call( d3.brush()                 // Add the brush feature using the d3.brush function
		.extent([[MARGINS.left, MARGINS.top], [FRAME_WIDTH, FRAME_HEIGHT]]) // initialise the brush area: start at 0,0 and finishes at width,height: it means I select the whole graph area
		.on("start brush", updateChart) // Each time the brush selection changes, trigger the 'updateChart' function
		);

	// Function that is triggered when brushing is performed
	function updateChart(event) {
		let extent = event.selection;
		let species = [];
		FRAME2.selectAll('circle')
			.each(function(d) {
				if (isBrushed(extent, d3.select(this).attr('cx'), d3.select(this).attr('cy'))) {
						species.push(d3.select(this).attr('class'));
					};
			});

		FRAME2.selectAll('circle')
			.classed("selected", function(){ 
					return isBrushed(extent, d3.select(this).attr('cx'), d3.select(this).attr('cy')) 
				});

		FRAME1.selectAll('circle')
			.classed("selected", function(){ 
				return isBrushed(extent, d3.select(this).attr('cx'), d3.select(this).attr('cy')) 
			});

		FRAME3.selectAll('rect')
			.classed("selected", function(){ 
				return species.includes(d3.select(this).attr('class')) 
			});
	}

	// A function that return TRUE or FALSE according if a dot is in the selection or not
	function isBrushed(brush_coords, cx, cy) {
		var x0 = brush_coords[0][0],
			x1 = brush_coords[1][0],
			y0 = brush_coords[0][1],
			y1 = brush_coords[1][1];
		return x0 <= cx && cx <= x1 && y0 <= cy && cy <= y1;   
		};
})






