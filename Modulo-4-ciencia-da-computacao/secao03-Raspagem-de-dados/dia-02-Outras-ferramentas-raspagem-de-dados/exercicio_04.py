import requests

from bs4 import BeautifulSoup

url = "https://pt.wikipedia.org"

page = requests.get(url)
# print(page.text)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

# print(soup.prettify())
# print(soup.find_all("a"))


def get_links_page(soup):
    links = soup.find_all("a")

    result = []

    for link in links:
        result.append(link["href"])

    return result


print(get_links_page(soup))
