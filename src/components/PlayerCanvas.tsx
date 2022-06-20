import { useEffect, useRef } from "react";

import { clearCanvas, drawRect } from "pocket-sized-facade.js";

export default function PlayerCanvas({
  numberOfPlayers = 0
}: {
  numberOfPlayers: number;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const boxWidth = 120;
  const boxHeight = 120;
  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;

      const width = canvasRef.current.width;
      // const height = canvasRef.current.height;
      const draw = () => {
        clearCanvas(context);

        let xOffset = 0;
        let yOffset = 0;

        for (let i = 0; i < numberOfPlayers; i += 1) {
          context.save();

          context.translate(xOffset, yOffset);

          xOffset += boxWidth;

          if (xOffset + boxWidth > width) {
            xOffset = 0;
            yOffset += boxHeight;
          }

          drawRect(context, 5, 5, boxWidth - 10, boxHeight - 10, {
            fillStyle: "#3a8ab5"
          });

          context.restore();
        }

        requestAnimationFrame(draw);
      };

      requestAnimationFrame(draw);
    }
  }, [canvasRef, numberOfPlayers]);

  return (
    <canvas ref={canvasRef} className="game-players" width="600" height="600" />
  );
}
