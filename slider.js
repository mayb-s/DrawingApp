//Stroke Weight
//to improve:
//slider could show increments 
//styling
//should be a part of sidebar so it scrolls when more tools are added
function Slider()
{
   
    
   
    var div=createDiv("Size");
    div.style('font-size', '20px');
    div.style('color', 'white');
    div.style('font-weight', 'bold');
    div.position(10, 610);

    var slider = createSlider(1, 50, 1);
    slider.position(-35, 530);
    slider.style('transform', 'rotate(270deg)');
    slider.style('width', '120px');
    

    this.draw = function()
    {
    
	
        var val = slider.value();
        return val;

       
    }

    

}