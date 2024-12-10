function ColorCanvas()
{

    this.icon = "assets/background.png";
	this.name = "colorCanvas";

	
	var drawing = false;
    var previousX=-1;
	

	this.draw = function()
	{
        
       
		//checks to see if mouse is within canvas and if click is true
		if(mouseIsPressed && mouseX<width && mouseX>0 
            && mouseY <height && mouseY>0) 
		{
            if(previousX==-1)
            {
                
                drawing = true;
                previousX=mouseX;

               
                //fills whole canvas with selected color
                let color= colourP.selectedColour;
                background(color);
                

            }
				
				
			
		}
		//if drawing is true, then it turns false and start mouse goes back to default value -1
		else
		{
			drawing = false;
            previousX=-1;
			

		}

		
	};


   




}