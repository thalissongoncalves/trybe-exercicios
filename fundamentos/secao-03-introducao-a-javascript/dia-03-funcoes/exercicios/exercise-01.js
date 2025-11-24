// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
const ligarDesligar = (status) => {
  status === 'ligado' ? status = 'desligado' : status = 'ligado';

  console.log(`O motor está ${status}`);
  return status;
};
