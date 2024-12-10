Overview

This drawing tool project provides various features for creating and editing drawings on an interactive canvas. 
It includes tools like Eraser, Paint Bucket, Shapes Toolbox, and a Stroke Slider, 
allowing users to draw, erase, fill shapes with color, and adjust their drawing tools' properties.

Features

1. Eraser Tool

Erases drawings on the canvas according to the mouse path.
Added to the toolbox and works similarly to the free draw tool, but with a white stroke and a push-and-pop mechanism for erasing.

2. Paint Bucket Tool

Fills any shape on the canvas with a selected color, including irregular shapes with multiple colors.
Implements a flood fill algorithm, using x and y parameters to fill the selected area. The algorithm checks pixel colors and ensures they match the canvas color before applying the selected fill color.

3. Shapes Toolbox

Allows users to select and draw different shapes (e.g., circle, square, star, heart) with a chosen color.
Shapes can be resized according to mouse movement, and the toolbox is placed next to the color palette for easy access.
Includes functions for each shape, with more complex shapes (like stars and hearts) requiring additional functions to render.

4. Stroke Slider

It allows users to adjust the size of their drawing stroke for all tools, including the eraser, spray can, and shapes.
Implemented using the createSlider() function, it displays under the toolbox icons and dynamically updates the stroke size.
