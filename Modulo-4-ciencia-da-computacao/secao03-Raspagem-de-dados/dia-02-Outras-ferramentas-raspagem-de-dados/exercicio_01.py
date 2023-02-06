from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()


def scrape(url):
    firefox.get(url)

    citacao = (
        firefox.find_element(By.CLASS_NAME, "quote")
        .find_element(By.TAG_NAME, "span")
        .get_attribute("innerHTML")
    )
    return citacao


print(scrape("https://quotes.toscrape.com/"))
