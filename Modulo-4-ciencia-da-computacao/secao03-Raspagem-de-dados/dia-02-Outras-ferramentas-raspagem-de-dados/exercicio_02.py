from selenium import webdriver

from selenium.webdriver.common.by import By

from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)


def scrape(url):
    firefox.get(url)

    paragrafos = firefox.find_elements(By.TAG_NAME, "p")

    for paragrafo in paragrafos:
        print(paragrafo.text)


scrape(
    "https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/"
)
