
//based off toolbox function 
//to improve:
//implement unselect function
//unclick function
function ShapesGrid() {


    var self = this;

    this.shapes=[];

    this.selectedShape = null;

   
    var shapeClick = function () {


        //remove any existing borders
		var items = selectAll(".shape");

            for (var i = 0; i < items.length; i++) 
            {
			    items[i].style('border', '0')
		    }


		var shapeName = this.id().split("shape")[0];
		self.selectShape(shapeName);

		

		//call loadPixels to make sure most recent changes are saved to pixel array
		loadPixels();
     

    }

    //add a shape to the shapes array
	this.addShape = function(shape) {
		//check that the object tool has an icon and a name
		if (!shape.hasOwnProperty("icon") || !shape.hasOwnProperty("name")) {
			alert("make sure your tool has both a name and an icon");
		}
		this.shapes.push(shape);
		addShapeIcon(shape.icon, shape.name);
 
		//if no tool is selected (ie. none have been added so far)
		//make this tool the selected one.
		if (this.selectedShape == null) 
        {
			this.selectShape("null");
            
		}
	};

    //add a new tool icon to the html page
	var addShapeIcon = function(icon, name) {
		var shape = createDiv("<img src='" + icon + "'></div>");
		shape.class('shape')
		shape.id(name + "shape")
		shape.parent('shapesGrid');
		shape.mouseClicked(shapeClick);


	};


    
	this.selectShape = function(shapeName) {
		//search through the tools for one that's name matches
		//toolName
		for (var i = 0; i < this.shapes.length; i++) {
			if (this.shapes[i].name == shapeName) 
            {

				//if the tool has an unselectTool method run it.
				// if (this.selectedShape != null 
                //     && this.selectedShape.hasOwnProperty("unselectShape")) 
                // {
				// 	this.selectedShape.unselectShape();
				// }


				//select the tool and highlight it on the toolbar
				this.selectedShape = this.shapes[i];
				select("#" + shapeName + "shape").style("border", "2px solid blue");



				//if the tool has an options area. Populate it now.
				if (this.selectedShape.hasOwnProperty("populateOptions")) {
					this.selectedShape.populateOptions();
				}
			}
		}
	};


	

   

}