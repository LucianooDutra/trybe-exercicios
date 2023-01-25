from collections import Counter


class Estatistica:
    @classmethod
    def media(cls, numbers):
        print(sum(numbers) / len(numbers))
        return sum(numbers) / len(numbers)

    @classmethod
    def mediana(cls, numbers):
        numbers.sort()
        index = len(numbers) // 2
        if len(numbers) % 2 == 0:
            print((numbers[index - 1] + numbers[index]) / 2)
            return (numbers[index - 1] + numbers[index]) / 2

        print(numbers[index])
        return numbers[index]

    @classmethod
    def moda(cls, numbers):
        # print(Counter(numbers).most_common()[0])
        number, _ = Counter(numbers).most_common()[0]
        print(number)
        return number


numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]

Estatistica.moda(numeros)
Estatistica.mediana(numeros)
Estatistica.media(numeros)
