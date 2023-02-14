# Exercício 6: Escreva um algoritmo que recebe uma lista e retorne-a na ordem
# reversa.


def list_revers(list: list):
    result = []
    for item in list:
        result.insert(0, item)
        # coloca o número do índice que o item será inserido e em seguida
        # o valor a ser adicionado
    return result


print(list_revers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
