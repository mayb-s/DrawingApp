//WARNING: Bucket Fill works but is slow
//things to optimize
//- flood fill function:
//it is too slow for large areas, like filling a whole canvas
//- only practical for smaller areas
function BucketTool()
{

    // //set an icon and a name for the object
	 this.icon = "assets/bucket.png";
	 this.name = "bucket";

	var drawing=false;

	var mouseBucketx=-1;
	var mouseBuckety=-1;

	var canvasColor;
	var colorObject;
	var selectedColorArray;

	 this.draw = function()
	 {
		

		if(mouseIsPressed && height>=mouseY 
			&& mouseY>=0 && mouseX<=width 
			&& mouseX>=0)
		{


			if(mouseBucketx==-1)
			{

				drawing=true;
				mouseBucketx=mouseX;
				mouseBuckety=mouseY;

				//get the color from the pixel that is clicked, 
				//returns in RGBA array
				canvasColor =get(mouseBucketx, mouseBuckety);
				//turn the color string into a color object
				//then turn object into rgba array like get()
				colorObject = color(colourP.selectedColour);
				var R= red(colorObject);
				var G= green(colorObject);
				var B= blue(colorObject);
				var A= alpha(colorObject);
				selectedColorArray= [R, G, B, A];
				//call floor fill function at the pixel clicked
				floodFill(mouseBucketx, mouseBuckety);


			}

		}
		else if(drawing)
		{
			drawing=false;
			mouseBucketx=-1;
			mouseBuckety=-1;

		}

	
	}

	function floodFill(x, y)
	{
		//initiate a stack 
		const pixelStack = [];
		//push the pixel at the parameters x and y into stack
		pixelStack.push([x, y]);
		//run a while loop while stack is not empty
		while(pixelStack.length>0)
		{
			//pop last item from stack and set as current x and y
			const [currentX, currentY] = pixelStack.pop();
			//conditon to be within canvas
			if(currentX >= 0 && currentX < width 
				&& currentY >= 0 && currentY< height)
			{
				//to get the color of the pixel 
				//at the current x and y popped
				const currentColor = get(currentX, currentY);
				//compare colors function is called to see
				//if the pixel color matches the canvas color
				//the canvas color is the color of the area that is being filled
				//if the current pixel is the same as the canvas color
				if(compareColors(currentColor, canvasColor))
				{
					//if the pixel color has not been painted yet, 
					//pixel color will not match with the new selected color
					if(!compareColors(currentColor, selectedColorArray))
					{
						//pixel is painted 
						strokeWeight(1);
			 			point(currentX, currentY);

						//surrounding pixels are pushed into stack

						//left pixel
						pixelStack.push([currentX-1, currentY]);
						//top pixel
						pixelStack.push([currentX, currentY-1]);
						//right pixel
						pixelStack.push([currentX+1, currentY]);
						//lower pixel
						pixelStack.push([currentX, currentY+1]);

					}
					
				}

			}


		}

		updatePixels();
	
	}

	function compareColors(one, two)
	{
		//compares 2 colors in rgba array
		//if all are equal, returns true 
		return(

			//red
			one[0]==two[0]
			//green
			&& one[1]==two[1]
			//blue
			&& one[2]==two[2]
			//alpha
			&& one[3]==two[3]
			
		)

	}

	
}

	
