

const Icons = () => {
    const pieces = ["king", "queen", "rook", "bishop", "knight", "pawn"];
  return (
    <div className="flex gap-1">
      <img src="/king_dark.svg" alt="king_dark" />
      <img src="/king_light.svg" alt="king_light" />
      <img src="/queen_dark.svg" alt="queen_dark" />
      <img src="/queen_light.svg" alt="queen_light" />
      <img src="/rook_dark.svg" alt="rook_dark" />
      <img src="/rook_light.svg" alt="rook_light" />
      <img src="/bishop_dark.svg" alt="bishop_dark" />
      <img src="/bishop_light.svg" alt="bishop_light" />
      <img src="/knight_dark.svg" alt="knight_dark" />
      <img src="/knight_light.svg" alt="king_light" />
      <img src="/pawn_dark.svg" alt="pawn_dark" />
      <img src="/pawn_light.svg" alt="pawn_light" />
    </div>
  );
};

export default Icons;
