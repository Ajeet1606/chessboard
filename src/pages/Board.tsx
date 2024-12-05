import { BLACK_COLOR, WHITE_COLOR, initialBoard } from "@/utils/config";
import { useState } from "react";

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    const board_x = Math.floor(index / 8);
    const board_y = index % 8;
    console.log(initialBoard[board_x][board_y]);

    e.dataTransfer.setData(
      "piece",
      JSON.stringify(initialBoard[board_x][board_y])
    );
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); // Necessary to allow dropping
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const piece = JSON.parse(e.dataTransfer.getData("piece"));
    console.log(piece);
    const board_x = Math.floor(index / 8);
    const board_y = index % 8;
    const tempBoard = board;
    tempBoard[board_x][board_y] = piece;
    tempBoard[piece.current_x][piece.current_y].piece = "";
    setBoard(tempBoard);
  };
  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8 shadow-md">
        {board.flat().map((current, index) => (
          <div
            key={index}
            className={`h-12 w-12 md:w-16 md:h-16 flex justify-center items-center`}
            style={{
              backgroundColor:
                current.color === "white" ? WHITE_COLOR : BLACK_COLOR,
            }}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {current.piece != "" && (
              <img
                src={current.image}
                alt={current.piece}
                width={45}
                className="hover:cursor-grab"
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
