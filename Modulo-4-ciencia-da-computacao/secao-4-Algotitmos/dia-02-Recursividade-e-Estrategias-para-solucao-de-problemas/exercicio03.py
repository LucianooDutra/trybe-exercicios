# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o
# maior número inteiro.


def get_bigger_number(numbers: list, size: int):
    if size == 1:
        return numbers[0]
    else:
        big_number = get_bigger_number(numbers, size - 1)
        if big_number > numbers[size - 1]:
            return big_number
        else:
            return numbers[size - 1]


def get_bigger_number_2(numbers: list):
    size_list = len(numbers)
    return get_bigger_number(numbers, size_list)


print(get_bigger_number_2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
