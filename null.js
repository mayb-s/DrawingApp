//Since both toolbox and shapebox have a separate selected tool, 
//Null prevents the use of a tool and shape at the same time
//prevents bugs
//to improve: 
//add unselect functions that are called when a selected tool is clicked again
//only one tool should be highlighted at a time
function Null()
{
    this.icon = "assets/null.png";
    this.name = "null";
    
    var drawing=false;

    this.draw = function()
    {
       drawing;
       
    }
       
    
}