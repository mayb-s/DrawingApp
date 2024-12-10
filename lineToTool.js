function LineToTool()
{

	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	
	var drawing = false;

	
	var previousX=-1;
	var previousY=-1;


	this.draw = function()
	{

		//if mouse is pressed, checks if start mouse is equal to default value. 
		//if it is, startmouse x and y is equal to current mouse x and y 
		if(mouseIsPressed)
		{
			

			if(previousX == -1){

				
				drawing = true;

				previousX=mouseX;
				previousY=mouseY;

				loadPixels();

				fill(0);
			}
 
			else{
				
				updatePixels();

				
				strokeWeight(slider.draw());
				line(previousX, previousY, mouseX, mouseY);
				

			}


			
		}

		
		//if drawing is true, then it turns false and start mouse goes back to default value -1
		else if(drawing)
		{
			drawing = false;
			previousX = -1;
			previousY = -1;


		}

		
	}
	


}

