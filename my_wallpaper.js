//your parameter variables go here!
let rect_width  = 200;
let rect_height = 200;
let headX = 80;
 let headY = 90;
 let squareX = 10;
 let squareY = 10;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  stroke(300, 300, 300);
  rect(1 ,1, rect_width, rect_height);
 
 DrawBlackSquare(42 , 1);
 DrawBlackSquare(1, 42);
 
 DrawBlackSquare(42, 83);
 DrawBlackSquare(1, 124);
 DrawBlackSquare(42, 164);
 DrawBlackSquare(83, 124);
 DrawBlackSquare(83, 42);
 DrawBlackSquare(124, 1);
 DrawSmiley(100,100);
 DrawBlackSquare(124, 83);

 DrawBlackSquare(164, 42);

 DrawBlackSquare(165, 124);
 DrawBlackSquare(124, 164);
 //DrawSmiley(100,100);
 //DrawSmiley(50,50);
 DrawSmiley2(180, 190);
 DrawSmiley3(200, 80);
 DrawSmiley3(1, 80);

}


 function DrawBlackSquare(squareX, squareY){
 stroke(0, 0, 0);
 fill(0, 0, 0);
 rect(squareX , squareY, 40);
 }

 function DrawSmiley(headX, headY){

 stroke(255, 204, 0);//headshape
 fill(255, 204, 0);
 ellipse(headX, headY -10, headX -40);
 ellipse(headX -10, headY, 25, 50);
 ellipse(headX, headY, 15, 50);

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
function DrawSmiley2(headX, headY){

 stroke(255, 204, 0);//headshape
 fill(255, 204, 0);
 ellipse(headX, headY -10, headX -120);
 ellipse(headX -19, headY, 15, 50);
 ellipse(headX, headY, 45, 70);

 stroke(0, 0, 0);//eyes :O
 fill(0, 0, 0);
 ellipse(headX -8, headY -20, 5, 10);
 ellipse(headX +10, headY -15, 5, 10);
 
 strokeWeight(2);
 noFill();//mouth :D
 beginShape();
 vertex(headX -15, headY -8);
 bezierVertex(headX -15, headY -1, headX -20, headY, headX -25, headY -15);
 endShape();

 noFill();//mouth :D
 beginShape();
 vertex(headX -15, headY -5);
 bezierVertex(headX -35, headY +25, headX +30, headY +30, headX +25, headY -5);
 endShape();


}

 function DrawSmiley3(headX, headY){

  stroke(255, 204, 0);//headshape
  fill(255, 204, 0);
  ellipse(headX, headY -10, 60);
  //ellipse(headX -10, headY, 25, 50);
  //ellipse(headX, headY, 15, 50);
 

  stroke(0, 0, 0);//eyes :O
  fill(0, 0, 0);
  ellipse(headX -8, headY -15, 5, 10);
  ellipse(headX +10, headY -15, 5, 10);
  
  strokeWeight(2);
  noFill();//mouth :D
 // beginShape();
  //vertex(headX -14, headY +3);
  //bezierVertex(headX -25, headY -9, headX -30, headY, headX -25, headY -15);
  //endShape();
 
  noFill();//mouth :D
  beginShape();
  vertex(headX -24, headY -5);
  bezierVertex(headX -15, headY +20, headX +20, headY +20, headX +25, headY -10);
  endShape();
 
}
