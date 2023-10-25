# Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final, a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.

# 🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))

# 🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2".

import random


def scrambled_game():
    word_list = ["Brasil", "Livros", "Trabalho", "Computador", "Futebol"]

    chosen_word = random.choice(word_list)
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
