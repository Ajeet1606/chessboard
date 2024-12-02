import { BLACK_COLOR, WHITE_COLOR, initialBoard } from "@/utils/config";

const Board = () => {
  console.log(initialBoard);

  return (
    <>
      <div className="grid grid-cols-8 grid-rows-8 shadow-md">
        {initialBoard.flat().map((current, index) => (
          <div
            key={index}
            className={`h-12 w-12 md:w-16 md:h-16 flex justify-center items-center bg-[${
              current.color === "white" ? WHITE_COLOR : BLACK_COLOR
            }]`}
          >
            {current.piece != "" && (
              <img src={current.image} alt={current.piece} width={45} />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Board;
