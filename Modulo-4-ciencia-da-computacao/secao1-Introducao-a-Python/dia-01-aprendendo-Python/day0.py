def basic_sum(first_number, second_number):
    return first_number + second_number


def basic_difference(first_number, second_number):
    return first_number - second_number


def basic_product(first_number, second_number):
    return first_number + second_number


def basic_division(first_number, second_number):
    return first_number / second_number


def basic_integer_division(first_number, second_number):
    return first_number // second_number


def basic_remainder(first_number, second_number):
    return first_number % second_number


def basic_potentiation(first_number, second_number):
    return first_number**second_number


def is_bool(value):
    result = ""
    if type(value) == bool:
        result = "É booleano"
    else:
        result = "Não é booleano"
    return result


def is_int(value):
    result = ""
    if type(value) == int:
        result = "É inteiro"
    else:
        result = "Não é inteiro"
    return result


def is_float(value):
    result = ""
    if type(value) == float:
        result = "É float"
    else:
        result = "Não é float"
    return result


def is_string(value):
    result = ""
    if type(value) == str:
        result = "É string"
    else:
        result = "Não é string"
    return result


def is_list(value):
    result = ""
    if type(value) == list:
        result = "É lista"
    else:
        result = "Não é lista"
    return result


def is_tuple(value):
    result = ""
    if type(value) == tuple:
        result = "É tupla"
    else:
        result = "Não é tupla"
    return result


def is_set(value):
    return isinstance(value, set)
    # result = ""
    # if type(value) == set:
    #     result = "É conjunto"
    # else:
    #     result = "Não é conjunto"
    # return result


def is_dict(value):
    result = ""
    if type(value) == dict:
        result = "É dicionário"
    else:
        result = "Não é dicionário"
    return result


def return_lower_case_string(word: str):
    return word.upper()


def return_upper_case_string(word: str):
    return word.lower()


def append_element_in_list(element, input_list):
    input_list.append(element)
    return input_list


def remove_element_from_list(element, input_list):
    input_list.remove(element)
    return input_list


def create_new_key_value_in_dict(key, value, input_dict):
    input_dict[key] = value
    return input_dict


def delete_key_from_dict(key, input_dict):
    del input_dict[key]
    return input_dict


def add_element_to_set(element, input_set):
    input_set.add(element)
    return input_set


def remove_element_from_set(element, input_set):
    input_set.remove(element)
    return input_set


def check_if_word_has_4_or_more_letters(word):
    return len(word) >= 4
    #     return False
    # else:
    #     return True


def check_what_number_is_greater(first_number, second_number):
    if first_number > second_number:
        return first_number
    elif second_number > first_number:
        return second_number
    else:
        return first_number

    # return first_number if first_number > second_number else second_number


def check_if_number_is_odd_or_even(number):
    if number % 2 == 0:
        return "even"
    else:
        return "odd"


def check_if_element_exists_in_list(element, input_list):
    if element in input_list:
        return True
    else:
        return False


def append_each_letter_of_the_word_in_a_list(word):
    lista_final = []
    for letra in word:
        lista_final.append(letra)
    return lista_final

    # return [letter for letter in word]


def return_index_of_the_uppercase_letter(word):
    for index, letra in word:
        if letra.isupper():
            return index
    return "não contém letra maiúscula"


def return_element_from_list_that_is_string(input_list):
    for elem in input_list:
        if type(elem) == str:
            return elem
    return "Não há string na lista"


if __name__ == "__main__":
    print("Soma:", basic_sum(10, 10))
    print("Diferença:", basic_difference(10, 10))
    print("Divisão:", basic_division(10, 10))
    print("Divisão inteira:", basic_integer_division(10, 10))
    print("Resto da divisão:", basic_remainder(10, 10))
    print("Potenciação:", basic_potentiation(10, 10))
    print("É Booleano?:", is_bool(False))
    print("É Inteiro?:", is_int(10))
    print("É Float?:", is_float(10.5))
    print("É String?:", is_string("Olá"))
    print("É Lista?:", is_list([1, 2, 3, 4]))
    print("É Tupla?:", is_tuple(("olá", "mundo", 10)))
    print("É Conjunto?:", is_set({"olá", "mundo", 10}))
    print("É Dicionário?:", is_dict({1: "olá", 2: "mundo", "terceiro": 10}))
    print("Retorna str maiúscula:", return_lower_case_string("Olá mundo"))
    print(
        "Adiciona o 1° parametro no final da lista",
        append_element_in_list(5, [1, 2, 3, 4]),
    )
    print(
        "Exclui o 1° parametro no final da lista",
        remove_element_from_list(3, [1, 2, 3, 4, 5]),
    )
    print(
        "Adicionar a chave e valor no dicionário",
        create_new_key_value_in_dict(3, "Tribe", {1: "olá", 2: "mundo"}),
    )
    print(
        "Remove a chave e valor no dicionário",
        delete_key_from_dict(3, {1: "olá", 2: "mundo", 3: "Tribe"}),
    )
    print(
        "Adicionar o elemento no conjunto",
        add_element_to_set(3, {"olá", "mundo", 10}),
    )
    print(
        "Remove o elemento no conjunto",
        remove_element_from_set(3, {"mundo", 10, 3, "olá"}),
    )
    print(
        "Contém mais de 4 caracteres?:",
        check_if_word_has_4_or_more_letters("Olá mundo"),
    )
    print(
        "Retorna o maior número entre os dois:",
        check_what_number_is_greater(1, 6),
    )
    print(
        "Retorna 'even' se numero for par ou 'odd' se ímpar:",
        check_if_number_is_odd_or_even(4),
    )
    print(
        "Retorna 'True' se numero contém na lista ou 'False' se não:",
        check_if_element_exists_in_list(3, [1, 2, 4, 5]),
    )
    print(
        "Retorna uma lista com todas as letras da string:",
        append_each_letter_of_the_word_in_a_list("Olá"),
    )
    # print(
    #     "Retorna o index da letra maiúscula de uma string:",
    #     return_index_of_the_uppercase_letter("Olá"),
    # )
    print(
        "Recebe uma lista e retorna a string que for encontrada nela:",
        return_element_from_list_that_is_string([1, 2, 4, "oi"]),
    )
