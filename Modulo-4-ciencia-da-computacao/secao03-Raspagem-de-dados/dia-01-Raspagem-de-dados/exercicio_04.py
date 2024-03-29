from parsel import Selector
import requests
# requests = faz a requisição da minha pagina
# parsel.Selector faz a transformação de arquivo HTML pra texto

URL_BASE = "http://books.toscrape.com/catalogue/"

response = requests.get(URL_BASE + "the-grand-design_405/index.html")

selector = Selector(text=response.text)

title = selector.css("h1::text").get()
print(title)

price = selector.css(".product_main .price_color::text").re_first(
    r"\d*\.\d{2}"
)
print(price)

description = selector.css(".sub-header ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
print(description)

url_img = URL_BASE + selector.css("#product_gallery img::attr(src)").get()
print(url_img)

print(f"{title}, {price}, {description}, {url_img}")
