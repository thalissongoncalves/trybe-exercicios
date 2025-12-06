// 1. Recupere o elemento que contém o título da página e altere para o nome de um filme da sua escolha.
window.document.getElementById("page-title").innerText = "Gigantes de Aço";

// 2. Recupere o primeiro parágrafo e altere o texto para o resumo do seu filme favorito.
window.document.getElementById("first-paragraph").innerText =
  "Em 'Gigantes de Aço', Charlie Kenton, um ex-boxeador em dificuldades, precisa lidar com a volta de seu filho de 11 anos, Max, após a morte da ex-mulher. Relutantemente, eles se unem para construir e treinar um robô a partir de sucatas para competir no novo esporte do futuro: o boxe entre máquinas gigantes. A dupla encontra em um robô aparentemente descartado, o Atom, a esperança de uma nova chance de sucesso no esporte.";

// 3. Recupere o subtítulo e altere-o para: Principais informações.
window.document.getElementById("subtitle").innerText =
  "Principais informações.";

// 4. Recupere os parágrafos usando getElementsByClassName, e altere a fonte do primeiro parágrafo para itálico.
const firstParagraph = (window.document.getElementsByClassName(
  "paragraph-style"
)[0].style.fontStyle = "italic");

// 5. Recupere o segundo parágrafo e coloque as informações principais: Exemplo: Direção: Nome da pessoa que dirigiu o filme, Roteirista: Nome da(s) pessoa(s) responsável(is) pelo roteiro
window.document.getElementById("second-paragraph").innerText =
  "Direção: Shawn Levy, Roteirista: Shawn Levy, John Gatins, Leslie Bohem.";

// 6. Recupere o subtítulo utilizando o getElementsByTagName e altere a cor da fonte para alguma de sua escolha.
window.document.getElementsByTagName("h2")[0].style.color = "gray";
