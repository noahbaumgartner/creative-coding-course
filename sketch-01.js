const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.lineWidth = width * 0.01;

    const side = width  * 0.10;
		const gap = width  * 0.03;
		const begin = width  * 0.17;
		const offset = width  * 0.02;

    let sideWithGap = side + gap;
		let x, y;

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				x = begin + sideWithGap * i;
				y = begin + sideWithGap * j;

				context.beginPath();
				context.rect(x, y, side, side);
				context.stroke();

				if (Math.random() > 0.5) {
					context.beginPath();
					context.rect(x + offset / 2, y + offset / 2, side - offset, side - offset);
					context.stroke();
				}
			}
		}
  };
};

canvasSketch(sketch, settings);
