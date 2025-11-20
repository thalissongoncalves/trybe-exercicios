const piece = "rainha";

switch (piece.toLowerCase()) {
  case "rei":
    console.log("Horizontal, vertical ou diagonal.");
    break;
  case "dama":
    console.log("Horizontal, vertical ou diagonal.");
    break;
  case "rainha":
    console.log("Horizontal, vertical ou diagonal.");
    break;
  case "torre":
    console.log("Horizontal ou vertical.");
    break;
  case "bispo":
    console.log("Diagonal.");
    break;
  case "cavalo":
    console.log("Formato de 'L'.");
    break;
  case "peão":
    console.log("Pra frente.");
    break;
  case "peao":
    console.log("Pra frente.");
    break;
  default:
    console.log("Sinto muito mas essa peça é inválida.");
}
