//to add:
//resize, edit length and width 
//after letting go of the mouse or trackpad
function Triangle()
{
	//set an icon and a name for the object
	 this.icon = "assets/triangle.png";
	 this.name = "triangle";

	
	
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
					triangle(previousX, previousY, size);
 
	 
				   
				 }
 
 
			 }else
			 {
				 previousX = -1;
				 previousY = -1;
				 drawing=false;
			 }
 
 
 
	 }


	 function triangle(x, y, side)
	 {
		//formula from online source
		//changes x and y with size
		//equilateral triangle
		var h = (side*sqrt(3))/2;
		beginShape();
		vertex(x, y);
		vertex(x+side,y);
		vertex(x+side/2, y-h);
		endShape(CLOSE);

		//second triangle on top with vertices in different order
		//to prevent rounds corners
		//with larger strokes
		beginShape();
		vertex(x+side,y);
		vertex(x+side/2, y-h);
		vertex(x, y);
		endShape(CLOSE);

	 }

 
 
 }
 