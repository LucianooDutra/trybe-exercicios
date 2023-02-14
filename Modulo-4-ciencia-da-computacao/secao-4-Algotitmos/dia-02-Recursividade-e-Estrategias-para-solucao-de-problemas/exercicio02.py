# Exercício 2: Transforme o algoritmo criado em recursivo.


def count_par2(n: int):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + count_par2(n - 1)
    else:
        return count_par2(n - 1)


print(count_par2(8))
