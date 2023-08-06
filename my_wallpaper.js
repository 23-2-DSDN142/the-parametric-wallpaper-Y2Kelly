//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;

let headX = 80;
let headY = 90;
 let head2X = 80;
 let head2Y = 90;
 

 let head3X = 80;
 let head3Y = 90;

 let squareX = 10;
 let squareY = 10;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
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
 
 DrawBlackSquare(42 , 1);
 DrawBlackSquare(1, 42);
 
 DrawBlackSquare(42, 83);
 DrawBlackSquare(1, 124);
 DrawBlackSquare(42, 164);
 DrawBlackSquare(83, 124);
 
 DrawBlackSquare(83, 42);
 DrawSmiley(80, 140);//green head
 DrawBlackSquare(124, 1);
 
 DrawBlackSquare(124, 83);

 DrawBlackSquare(166, 42);
 DrawBlackSquare(166, 125);
 DrawSmiley2(170, 165);//neon blue head
 DrawBlackSquare(124, 164);
 DrawSmiley2 (100,50);//neon blue

 //DrawSmiley(100,100);
 //DrawSmiley(50,50);
 DrawSmiley3(200, 80);//yellow smiley
 DrawSmiley3(1, 80);//yellow smiley
}


 function DrawBlackSquare(squareX, squareY){
 stroke(153, 51, 204);
 fill(153, 51, 204);
 rect(squareX , squareY, 40);
 }
  
 function DrawSmiley(headX, headY){

 stroke(105, 219, 14);//headshape headX=80, headY=90
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
function DrawSmiley2(head2X, head2Y){

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

 function DrawSmiley3(head3X, head3Y){

  stroke(255, 204, 0);//headshape
  fill(255, 204, 0);
  ellipse(head3X, head3Y -10, 60);
  //ellipse(headX -10, headY, 25, 50);
  //ellipse(headX, headY, 15, 50);
 

  stroke(0, 0, 0);//eyes :O
  fill(0, 0, 0);
  ellipse(head3X -8, head3Y -15, 5, 10);
  ellipse(head3X +10, head3Y -15, 5, 10);
  
  strokeWeight(2);
  noFill();//mouth :D
 // beginShape();
  //vertex(headX -14, headY +3);
  //bezierVertex(headX -25, headY -9, headX -30, headY, headX -25, headY -15);
  //endShape();
 
  noFill();//mouth :D
  beginShape();
  vertex(head3X -24, head3Y -5);
  bezierVertex(head3X -15, head3Y +20, head3X +20, head3Y +20, head3X +25, head3Y -10);
  endShape();
 
}
