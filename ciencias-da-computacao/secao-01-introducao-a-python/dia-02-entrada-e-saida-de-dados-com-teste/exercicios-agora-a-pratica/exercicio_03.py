import random
import csv

with open("exercicio_02.csv", encoding="UTF-8") as file:
    words_reader = csv.reader(file, delimiter=",", quotechar='"')
    header, *data = words_reader

group_by_word = []

for test in data:
    group_by_word.append(test[0])


def scrambled_game():
    chosen_word = random.choice(group_by_word)
    scrambled_word = "".join(random.sample(chosen_word, len(chosen_word)))

    print(f"Descubra qual é a seguinte palavra embaralhada: {scrambled_word}")
    print("Você tem 3 chances.")
    life_one = input("Primeira tentativa, digite a palavra correta: ")
    if life_one == chosen_word:
        return print(f"Parabéns, você acertou!! A palavra é: {chosen_word}")
    life_two = input("Segunda tentativa, digite a palavra correta: ")
    if life_two == chosen_word:
        return print(f"Parabéns, você acertou!! A palavra é: {chosen_word}")
    life_three = input("Terceira tentativa, digite a palavra correta: ")
    if life_three == chosen_word:
        return print(f"Parabéns, você acertou!! A palavra é: {chosen_word}")
    print("Suas tentativas se esgotaram, tente novamente mais tarde!")


scrambled_game()
