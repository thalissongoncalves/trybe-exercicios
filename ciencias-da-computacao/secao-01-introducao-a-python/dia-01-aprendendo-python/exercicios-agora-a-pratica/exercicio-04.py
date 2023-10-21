# Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def verify_name(listName):
    bigger = 0
    for name in listName:
        if bigger < len(name):
            bigger = len(name)
    return bigger

print(verify_name(list))