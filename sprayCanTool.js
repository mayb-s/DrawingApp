//spray can object literal
function SprayCanTool() {
    this.name = "sprayCanTool";
    this.icon = "assets/sprayCan.jpg";


    this.points = 13;
    this.spread = 10;

    this.draw = function() {
        //if the mouse is pressed paint on the canvas
        //spread describes how far to spread the paint from the mouse pointer
        //points holds how many pixels of paint for each mouse press.
        if(mouseIsPressed)
        {
            //adjusted size from slider to improve range
            //spread is made proportional to size
            var size= slider.draw()/10;

            for(var i = 0; i < this.points; i++){
                strokeWeight(size);
                point(random(mouseX-this.spread*size, mouseX + this.spread*size), 
                    random(mouseY-this.spread*size, mouseY+this.spread*size));
            }
        }
    }


};

