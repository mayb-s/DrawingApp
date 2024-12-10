//to improve:
//star function, vertices to make it more even
//add math formula to make perfect star
//resize, edit length and width 
//after letting go of the mouse or trackpad
function Star()
{
	//set an icon and a name for the object
	 this.icon = "assets/star.png";
	 this.name = "star";

	
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
					star(previousX, previousY, size);
 
	 
				   
				 }
 
 
			 }else
			 {
				 previousX = -1;
				 previousY = -1;
				 drawing=false;
			 }
 
 
 
	 }


	 function star(x, y, size)
	 {
		//vertices to draw shape were tweaked
		//changes x and y with size
		beginShape();
		vertex(x-0.25*size, y);
		vertex(x+3.75*size, y+0.25*size);
		vertex(x+5*size, y - 3.75*size);
		vertex(x+6.25*size, y+0.25*size);
		vertex(x+10.25*size, y);
		vertex(x+7*size, y+2.5*size);
		vertex(x+8.75*size, y+6.75*size);
		vertex(x+5*size, y+4*size);
		vertex(x+1.25*size, y+6.75*size);
		vertex(x+3*size, y+2.5*size);
		endShape(CLOSE);

		//second shape on top with vertices in different order
		//added to prevent round corners
		//when increasing stroke
		beginShape();
		vertex(x+7*size, y+2.5*size);
		vertex(x+8.75*size, y+6.75*size);
		vertex(x+5*size, y+4*size);
		vertex(x+1.25*size, y+6.75*size);
		vertex(x+3*size, y+2.5*size);
		vertex(x-0.25*size, y);
		vertex(x+3.75*size, y+0.25*size);
		vertex(x+5*size, y - 3.75*size);
		vertex(x+6.25*size, y+0.25*size);
		vertex(x+10.25*size, y);
		endShape(CLOSE);
  

	 }
 
 
 
 }
 