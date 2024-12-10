//to add:
//resize, edit length and width 
//after letting go of the mouse or trackpad
function Square()
{
	//set an icon and a name for the object
	 this.icon = "assets/square.png";
	 this.name = "square";

	
	var previousX = -1;
	var previousY = -1;
	
	var drawing = false;


	this.draw = function()
	{
		
			 //if the mouse is pressed
			
	
			if(mouseIsPressed)
			{
				
				
				if (previousX == -1)
				{
					drawing=true;
					previousX = mouseX;
					previousY = mouseY;
	
					loadPixels();
					
				}else{
	
					updatePixels();
	
					//size according to distance from initial click 
					var size=dist(previousX, previousY, mouseX, mouseY);
					//stoke size according to slider value
					strokeWeight(slider.draw());
					noFill();
					//draws perfect square
					rectMode(CENTER);
					rect(previousX, previousY, size*2, size*2);

	
				  
				}


			}else
			{
				previousX = -1;
				previousY = -1;
				drawing=false;
			}



	}



}
