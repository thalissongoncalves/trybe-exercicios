# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

list = [1, 5, 10, 15, 20]

def media(dados):
    number = 0
    count = 0
    for num in dados:
        number+=num
        count+=1
    return number / count

print(media(list))