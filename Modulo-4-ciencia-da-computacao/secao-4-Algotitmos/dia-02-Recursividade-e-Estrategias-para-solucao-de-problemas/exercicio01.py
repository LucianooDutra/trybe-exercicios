# Exercício 1: Crie um algoritmo não recursivo para contar quantos
# números pares existem em uma sequência numérica (1 a n).


def count_par(n: int):
    count = 0
    for number in range(n + 1):
        if number % 2 == 0 and number != 0:
            count += 1
    return count


print(count_par(10))
