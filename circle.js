//to add:
//resize, edit length and width 
//after letting go of the mouse or trackpad
function Circle()
{
	//set an icon and a name for the object
	 this.icon = "assets/circle.png";
	 this.name = "circle";

	
	var previousX = -1;
	var previousY = -1;

	var drawing = false;

	 this.draw = function()
	 {
		
	 	//if the mouse is pressed
		

		if(mouseIsPressed){
			
			
			if (previousX == -1)
			{
				drawing=true;
				previousX = mouseX;
				previousY = mouseY;

				loadPixels();
				
			}
			else{

				updatePixels();

				//radius according to distance from initial click
				var radius=dist(previousX, previousY, mouseX, mouseY);
				//stroke size according to slider value
                strokeWeight(slider.draw());
				noFill();
				//draws circle
				ellipseMode(CENTER);
				ellipse(previousX, previousY, radius*3);
				

              
			}
		}
		
		else{
			previousX = -1;
			previousY = -1;
			drawing=false;
		}


		 
		


	};



}
