# Faça um programa que receba um nome e imprima o mesmo na vertical em escada
# invertida.


def ladder_name(name):
    for removed_letters in range(len(name)):
        for index in range(len(name) - removed_letters):
            print(name[index], end="")
        print()


ladder_name("PEDRO")
