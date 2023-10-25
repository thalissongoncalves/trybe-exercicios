from codigo import is_odd, divide
import pytest


def test_is_odd_when_number_is_odd_returns_true():
    'Para um número ímpar a função deve retornar o valor True'
    assert is_odd(3) is True


def test_is_odd_when_number_is_even_returns_false():
    'Para um número par a função deve retornar o valor False'
    assert is_odd(2) is False


def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)

# pytest.fixtures: são funções que podemos criar e serão executadas antes e/ou depois dos nossos testes. Podemos usá-las para inicializar ou limpar um banco de dados, criar valores de mock reutilizáveis, capturar logs do terminal e muito mais! Se quiser aprofundar, veja a documentação oficial.

# unittest.mock: é uma biblioteca nativa que oferece diversas formas de simular comportamentos que queremos testar. São úteis quando estamos fazendo testes unitários e não queremos depender do funcionamento de outras partes da aplicação (como testar um Service sem depender de sua Model). Para aprofundar, veja a documentação oficial!

# hypothesis e faker: são 2 exemplos de bibliotecas externas (precisam ser instaladas com o pip) que nos ajudam a criar diversos valores de teste. A biblioteca hypothesis (documentação aqui) nos ajuda executando um teste para diversos valores a partir de uma regra como “números pares“ ou “dicionários com a chave ‘name’ sendo uma string“. Já a faker (documentação aqui) possui diversos geradores mais complexos (ex: email, telefone, endereço, CPF, cartão de crédito, etc.), e tudo isso com poucas linhas de código!
