let f = 0;
setup = _ => {
	createCanvas(720, 720, WEBGL);
}
draw = _ => {
	let e = 180;
	rotateY(f / e);
	rotate(f / e);
	if (noise(f) > 0.7) box(6200);
	for (y = -e; y < e; y += 60) {
		for (z = -e; z < e; z += 60) {
			for (x = -e; x < e; x += 60) {
				push();
				scale(1, tan(f / 99), 1);
				stroke(abs(z + y));
				let Y = y - f % 60;
				translate(x, Y, z);
				pop(box(Y / 6));
			}
		}
	}
	f++;
}