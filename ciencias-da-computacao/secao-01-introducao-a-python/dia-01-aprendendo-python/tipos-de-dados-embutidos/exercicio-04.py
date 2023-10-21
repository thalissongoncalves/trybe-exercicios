# Insira no objeto uma nova propriedade com o nome de chave “recorrente” e o valor “Sim”. Em seguida, imprima o objeto no console.
# Remova a propriedade cuja chave é “origem” e imprima o objeto no console.

info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

info["recorrente"] = "Sim"
del info["origem"]
print(info)