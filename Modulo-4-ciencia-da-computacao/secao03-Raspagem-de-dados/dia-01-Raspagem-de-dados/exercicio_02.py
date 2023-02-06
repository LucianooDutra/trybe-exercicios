import requests

response = requests.get("https://api.github.com/users")
users = response.json()
# print(users)

for user in users:
    print(f"{user['login']} {user['url']}")
