
/* @pjs preload="data/StarConstellations.jpg"; */

frameRate(150);
//PImage backgrd;
int a;


void setup() {
	size(1373,874);
	
	//backgrd = loadImage("data/StarConstellations.jpg");
}


var count = 0;
var quadrant = 1;

var xdot;
var ydot;
background(0, 0, 0);

void mousePressed () {
    
    background(0, 0, 0);
        
    count = 0;
	quadrant = 1;


};




void draw () {
	fill (255, 255, 255);
	stroke(255, 255, 255);
	

	if ( quadrant === 1 && count <= 89 ) {
	xdot = random (1040, 1371);
	ydot = random (2, 200);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
		}
		else if ( count > 1 && count <= 7 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 7 && count <= 11 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 11 && count <= 30 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 30 && count <= 50 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 50 && count <= 69) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 69 && count <= 88 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	


	if ( quadrant === 2 && count <= 89 ) {
	xdot = random (1040, 1371);
	ydot = random (200, 415 );
	count += 1;
		if ( count === 1 ) {

			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (1338, 232);
			point (1070, 257);
			point (1153, 407);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 80) {
			xdot = random (1235, 1371);
			ydot = random (353, 415);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if (count > 80 && count <= 88) {
			xdot = random (1041, 1107);
			ydot = random (363, 416);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 3 && count <= 89 ) {
	xdot = random (1040, 1371);
	ydot = random (415, 872 );
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (1108, 524);
			point (1186, 669);
			point (1302, 670);
			point (1189, 823);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 88) {
			xdot = random (1040, 1371);
			ydot = random (415, 486);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 4 && count <= 89 ) {
	xdot = random (707, 1040);
	ydot = random (2, 200);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (753, 33);
			point (750, 115);
			point (855, 125);
			point (709, 202);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 7 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 7 && count <= 11 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 11 && count <= 30 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 30 && count <= 50 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 50 && count <= 69) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 69 && count <= 88 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 5 && count <= 89 ) {
	xdot = random (707, 1040);
	ydot = random (200, 415);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (1009, 206);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 88) {
			xdot = random (705, 1040);
			ydot = random (365, 415);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 6 && count <= 89 ) {
	xdot = random (707, 1040);
	ydot = random (415, 872);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (883, 732);
			point (839, 660);
			point (989, 604);
			point (912, 596);
			point (805, 462);
			point (753, 442);
			point (853, 423);
			point (725, 805);
			point (713, 757);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 79) {
			xdot = random (917, 1040);
			ydot = random (415, 487);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if (count > 79 && count <= 88) {
			xdot = random (707, 785);
			ydot = random (415, 500);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 7 && count <= 89 ) {
	xdot = random (420, 707);
	ydot = random (2, 350);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (617, 134);
			point (551, 139);
			point (488, 171);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 7 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 7 && count <= 11 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 11 && count <= 30 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 30 && count <= 50 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 50 && count <= 69) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 69 && count <= 88 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 8 && count <= 89 ) {
	xdot = random (420, 707);
	ydot = random (350, 615);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (636, 367);
			point (681, 394);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 88) {
			xdot = random (420, 707);
			ydot = random (415, 501);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 9 && count <= 89 ) {
	xdot = random (420, 707);
	ydot = random (615, 872);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (614, 682);
			point (676, 673);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 7 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 7 && count <= 11 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 11 && count <= 30 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 30 && count <= 50 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 50 && count <= 69) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 69 && count <= 88 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 10 && count <= 89 ) {
	xdot = random (2, 420);
	ydot = random (182, 525);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (125, 287);
			point (64, 322);
			point (25, 355);
			point (70, 436);
			point (188, 470);
			point (272, 473);
			point (326, 366);
			point (367, 281);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 75) {
			xdot = random (341, 415);
			ydot = random (415, 525);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if (count > 75 && count <= 81) {
			xdot = random (109, 341);
			ydot = random (497, 525);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if (count > 81 && count <=88) {
			xdot = random (2, 109);
			ydot = random (463, 525);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 11 && count <= 89 ) {
	xdot = random (2, 420);
	ydot = random (525, 695);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (97, 530);
			point (312, 582);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 5 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 5 && count <= 8 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 8 && count <= 22 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 22 && count <= 37 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 37 && count <= 54) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 54 && count <= 68 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if (count > 68 && count <= 72) {
			xdot = random (277, 415);
			ydot = random (525, 551);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if (count > 72 && count <= 88) {
			xdot = random (2, 277);
			ydot = random (525, 589);
			strokeWeight(2.5);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
	
	if ( quadrant === 12 && count <= 89 ) {
	xdot = random (2, 420);
	ydot = random (695, 872);
	count += 1;
		if ( count === 1 ) {
			strokeWeight(3.3);
			point (xdot, ydot);
			stroke(0, 255, 255);
			strokeWeight(3.5);
			point (245, 767);
			point (131, 775);
			point (159, 816);
			stroke(255, 255, 255);
		}
		else if ( count > 1 && count <= 7 ) {
			strokeWeight(1.5);
			point (xdot, ydot);
		}
		else if ( count > 7 && count <= 11 ) {
			strokeWeight(1.3);
			point (xdot, ydot);
		}
		else if ( count > 11 && count <= 30 ) {
			strokeWeight(1.1);
			point (xdot, ydot);
		}
		else if ( count > 30 && count <= 50 ) {
			strokeWeight(0.75);
			point (xdot, ydot);
		}
		else if ( count > 50 && count <= 69) {
			strokeWeight(0.5);
			point (xdot, ydot);
		}
		else if ( count > 69 && count <= 88 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
		}
		else if ( count === 89 ) {
			strokeWeight(0.3);
			point (xdot, ydot);
			quadrant += 1;
			count = 0;
		}
	};
	
};

