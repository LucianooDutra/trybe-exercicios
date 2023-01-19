import random
import json
import csv


# Faça um programa que receba um nome
# e imprima o mesmo na vertical em escada invertida.
def inverted_name(name: str):
    for letter in range(len(name)):
        # print(letter)
        for index in range(len(name) - letter):
            print(name[index], end="")
        print()


# Jogo da palavra embaralhada. Desenvolva um jogo
#  em que a pessoa usuária tenha que adivinhar uma
#  palavra que será mostrada com as letras embaralhadas.
# O programa terá uma lista de palavras e escolherá
# uma aleatoriamente. O jogador terá três tentativas
# para adivinhar a palavra. Ao final, a palavra deve ser
# mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
MAX_ATTEMPTS = 3


def retrieve_words(file):
    return [word.strip() for word in file]


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


# 4°
# Dado o seguinte arquivo no formato JSON, leia seu conteúdo
# e calcule a porcentagem de livros em cada categoria
# em relação ao número total de livros. O resultado deve ser
# escrito em um arquivo no formato CSV como o exemplo abaixo.


def retrieve_books(file):
    return json.load(file)


def count_books_by_categories(books):
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1
    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    # 1°
    # name = input("Digite um nome: ")
    # inverted_name(name)
    # print(range(len(name)))
    # 2° - 3°
    # with open("words.txt") as file:
    #     words = retrieve_words(file)
    # secret_word, scrambled_word = draw_secret_word(words)
    # print(f"Scrambled word is {scrambled_word}")
    # guesses = collect_guesses()
    # check_game_result(secret_word, guesses)
    # 4°
    # retrieve books
    with open("books.json") as file:
        books = retrieve_books(file)

    # count by category
    book_count_by_category = count_books_by_categories(books)

    # calculate percentage
    number_of_books = len(books)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", "w") as file:
        write_csv_report(file, header, books_percentage_rows)
