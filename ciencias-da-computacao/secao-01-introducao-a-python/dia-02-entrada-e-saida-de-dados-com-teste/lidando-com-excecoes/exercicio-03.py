# Dado um arquivo contendo estudantes e suas respectivas notas, escreva um programa que:

# 1 - lê todas essas informações;
# 2 - aplique um filtro, mantendo somente as pessoas que estão reprovadas;
# 3 - escreva seus nomes em outro arquivo.

# Considere que a nota miníma para aprovação é 6.

# Arquivo:
# Marcos 10
# Felipe 4
# José 6
# Ana 10
# Maria 9
# Miguel 5

# Exemplo saída:
# Felipe
# Miguel

# 🦜 A função split pode ser utilizada para dividir o nome em uma linha. Ex: line.split() -> ["Marcos", "10"].

with open("alunos.txt", "w") as file:
    file.write("Marcos 10\n")
    file.write("Felipe 4\n")
    file.write("José 6\n")
    file.write("Ana 10\n")
    file.write("Maria 9\n")
    file.write("Miguel 5\n")

reproved_students = []


with open("alunos.txt", "r") as file:
    for line in file:
        separator = line.split(" ")
        if int(separator[1]) < 6:
            reproved_students.append(separator[0] + "\n")

with open("reprovados.txt", "w") as reproved_students_file:
    for line in reproved_students:
        print(line)
    reproved_students_file.writelines(reproved_students)