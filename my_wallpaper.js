//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;

let BheadX = 300;
let BheadY = 150;

let Ghead2X = 80;
let Ghead2Y = 80;
 

let Yhead3X = 80;
let Yhead3Y = 490;

let squareX = 100;
let squareY = 100;

if(squareX > 100) {
 DrawGREENSmiley(195, 195);
} else {
 DrawGREENsmiley(Ghead2X, Ghead2Y);
}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  stroke(0, 0, 0);
  fill(0, 0, 0);
  rect(1 ,1, rect_width, rect_height);
 
  DrawPurpleSquare(195, 1);//Background Tiling(they are actually purple)
  DrawPurpleSquare(195, 164);
  DrawPurpleSquare(195, 84);
  DrawPurpleSquare(-30, 84);
  DrawPurpleSquare(-30, 1);
  DrawPurpleSquare(-30, 164);
 DrawPurpleSquare(42 , 1);
 DrawPurpleSquare(1, 42);
 
 DrawPurpleSquare(42, 83);
 DrawPurpleSquare(1, 124);
 DrawPurpleSquare(42, 164);
 DrawPurpleSquare(83, 124);
 DrawPurpleSquare(83, 42);
 DrawGREENSmiley(Ghead2X, Ghead2Y);//green head
 DrawPurpleSquare(124, 1);
 DrawPurpleSquare(124, 83);
 DrawPurpleSquare(166, 42);
 DrawPurpleSquare(166, 125);
 DrawBLUESmiley(BheadX-40, BheadY+100);//neon blue head
 DrawPurpleSquare(squareX+120, squareY+180);
 DrawBLUESmiley (BheadX-200, BheadY-100);//neon blue
 DrawYELLOWSmiley(Yhead3X-79, Yhead3Y);//yellow smiley
 DrawYELLOWSmiley(Yhead3X+479, Yhead3Y);//yellow smiley

}

 function DrawPurpleSquare(squareX, squareY){
 stroke(153, 51, 204);
 fill(153, 51, 204);
 rect(squareX , squareY, 40);
 }
  
 function DrawGREENSmiley(headX, headY){

 stroke(105, 219, 14);//headshape
 fill(105, 219, 14);
 ellipse(headX, headY -10, headX -20);
 ellipse(headX -10, headY, headX -55, headY -90);
 ellipse(headX, headY, headX -65, headY -90);

 stroke(0, 0, 0);//eyes :O
 fill(0, 0, 0);
 ellipse(headX -8, headY -20, 5, 10);
 ellipse(headX +10, headY -15, 5, 10);
 
 strokeWeight(2);
 noFill();//mouth :D
 beginShape();
 vertex(headX -15, headY -5);
 bezierVertex(headX -15, headY -10, headX -30, headY, headX -25, headY -15);
 endShape();

 noFill();//mouth :D
 beginShape();
 vertex(headX -15, headY -5);
 bezierVertex(headX -15, headY +10, headX +30, headY +20, headX +25, headY -15);
 endShape();


}
function DrawBLUESmiley(head2X, head2Y){
  
  scale(0.6);
 stroke(153, 255, 204);//headshape
 fill(153, 255, 204);
 ellipse(head2X, head2Y -10, 60);
 ellipse(head2X -22, head2Y, 15, 50);
 ellipse(head2X, head2Y, 45, 70);

 stroke(0, 0, 0);//eyes :O
 fill(0, 0, 0);
 ellipse(head2X -8, head2Y -20, 5, 10);
 ellipse(head2X +10, head2Y -15, 5, 10);
 
 strokeWeight(2);
 noFill();//mouth :D
 beginShape();
 vertex(head2X -15, head2Y -8);
 bezierVertex(head2X -15, head2Y -1, head2X -20, head2Y, head2X -25, head2Y -15);
 endShape();

 noFill();//mouth :D
 beginShape();
 vertex(head2X -15, head2Y -5);
 bezierVertex(head2X -35, head2Y +25, head2X +30, head2Y +30, head2X +25, head2Y -5);
 endShape();


}

 function DrawYELLOWSmiley(head3X, head3Y){
  
  stroke(255, 204, 0);//headshape
  fill(255, 204, 0);
  ellipse(head3X, head3Y -10, 60); 

  stroke(0, 0, 0);//eyes :O
  fill(0, 0, 0);
  ellipse(head3X -8, head3Y -15, 5, 10);
  ellipse(head3X +10, head3Y -15, 5, 10);
  
  strokeWeight(2);
  noFill();//mouth :D
 
  noFill();//mouth :D
  beginShape();
  vertex(head3X -24, head3Y -5);
  bezierVertex(head3X -15, head3Y +20, head3X +20, head3Y +20, head3X +25, head3Y -10);
  endShape();
 
  stroke(153, 51, 204);
  fill(153, 51, 204);
  rect(345 , 458, 120, 101);
}
