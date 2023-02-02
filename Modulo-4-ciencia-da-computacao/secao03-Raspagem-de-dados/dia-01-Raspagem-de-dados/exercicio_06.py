import requests
from pymongo import MongoClient

# Faço a leitura dos dados e os transformo em json
response = requests.get("https://lms-assets.betrybe.com/lms/books.json")
books = response.json()
# print(books)


# insiro os meus dados no meu banco de dados
# client = MongoClient()
# db = client.library
# documents = books
# db.books.insert_many(documents)
# client.close()  # fecha a conexão com o banco de dados

# filtro meu retorno de dados que quero
client = MongoClient()
db = client.library
# busca um documento da coleção, de acordo com minha categoria escolhida
# category = input("Escolha uma categoria: ")
category = "Internet"
result = db.books.find({"categories": category})
# print(result[0]["title"])
for book in result:
    print(book["title"])
client.close()
