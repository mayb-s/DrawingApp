//to add:
//resize, edit length and width 
//after letting go of the mouse or trackpad
function Heart()
{
	//set an icon and a name for the object
	 this.icon = "assets/heart.png";
	 this.name = "heart";

	
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
					//stoke weight according to slider value
					 strokeWeight(slider.draw());
					 noFill();
					 //heart function is called
					 heart(previousX, previousY, size);
 
	 
				   
				 }
 
 
			 }else
			 {
				 previousX = -1;
				 previousY = -1;
				 drawing=false;
			 }
 
 
 
	 }


	 function heart(x, y, size)
	 {
		//draws shape with vertices
		//changes x and y with size
		beginShape();

  		vertex(x, y);
		
  		bezierVertex(x - size / 2, y - size / 2,
		  			x - size, y+size/3, 
					x, y + size);
  		bezierVertex(x + size, y+size/3, 
					x + size / 2, y - size / 2, 
					x, y);
					
  		endShape(CLOSE);

	 }
 
 
 
 }
 