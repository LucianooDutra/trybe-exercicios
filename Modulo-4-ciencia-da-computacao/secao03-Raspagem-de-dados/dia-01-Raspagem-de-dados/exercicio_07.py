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
# busca um documento da coleção, com status PUBLISH, agrupados por
# categorias, somados e ordenada de forma decrescente
pipelines = [
    {"$match": {"status": "PUBLISH"}},
    {"$unwind": "$categories"},
    {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
    {"$sort": {"count": -1}},
]
result = db.books.aggregate(pipelines)

for book in result:
    # print(book) # {'_id': 'Python', 'count': 6}
    print(book["_id"], book["count"], sep=": ")
    print(f"{book['_id']}: {book['count']}")

client.close()
