# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede (em m²).

def tinta(m):
    litro = 0
    lata = 0
    total_price = 0
    for num in range(0, m + 1, 3):
        if num > 0:
            litro += 1
    for num in range(0, m + 1, 54):
        if num > 0:
            lata += 1
            total_price += 80
    total = (lata, total_price)
    print(total)

tinta(108)