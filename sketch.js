//global variables that will store the toolbox colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

//new variables
var shapebox = null;
var slider = null;
var sketches = [];
var input;
var img;


function setup() {

	//create a canvas to fill the content div from index.html
	canvasContainer = select('#content');
	var c = createCanvas(canvasContainer.size().width, canvasContainer.size().height);
	c.parent("content");


	//create helper functions and the colour palette
	helpers = new HelperFunctions();
	colourP = new ColourPalette();

	//create a toolbox for storing the tools
	toolbox = new Toolbox();

	//add the tools to the toolbox.
	toolbox.addTool(new FreehandTool());
	toolbox.addTool(new LineToTool());
	toolbox.addTool(new SprayCanTool());
	toolbox.addTool(new mirrorDrawTool());

	//new tools for toolbox
	toolbox.addTool(new EraserTool());
	toolbox.addTool(new BucketTool());
	toolbox.addTool(new ColorCanvas());
	
	//new toolbox for shapes
	shapebox = new ShapesGrid();
	shapebox.addShape(new Heart());
	shapebox.addShape(new Star());
	shapebox.addShape(new Triangle());
	shapebox.addShape(new Square());
	shapebox.addShape(new Circle());
	shapebox.addShape(new Null());

	//stroke Weight slider
	slider = new Slider();
  
	background(255, 255, 255, 0);
	
	  
	

}

function draw() 
{
	//to load images onto canvas, using helper function load Image
	if (img) {
		
		image(img, 0, 0, width, height);
		//retuns null so image doesn't get redrawn 
		img=null;
		
	}
	

	//prevents user from drawing while mouse is on sidebar or box below
	if(mouseX>0 && mouseX<width && mouseY>0 && mouseY<height)
	{
		
	//call the draw function from the selected tool.
	//hasOwnProperty is a javascript function that tests
	//if an object contains a particular method or property
	//if there isn't a draw method the app will alert the user
	if (toolbox.selectedTool.hasOwnProperty("draw")
	&&shapebox.selectedShape!=null && shapebox.selectedShape.name=="null") 
	{
		
		//create image and update and push into array 
		let img= createImage(width,height);
		img.loadPixels();
		toolbox.selectedTool.draw();
		img.updatePixels();
		sketches.push(img);
		if(sketches.length>10)
		{
			sketches.shift();

		}
	
	}else{shapebox.selectedShape.draw()}

	if(!shapebox.selectedShape.hasOwnProperty("draw"))
	{
		alert("it doesn't look like your shape has a draw method!");

	}else if(!toolbox.selectedTool.hasOwnProperty("draw"))
	{
		alert("it doesn't look like your tool has a draw method!");
		
	}

	}

	
}