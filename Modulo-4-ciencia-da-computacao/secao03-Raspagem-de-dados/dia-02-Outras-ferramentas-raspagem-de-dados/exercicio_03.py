from selenium import webdriver

from selenium.webdriver.common.by import By

from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument("--headless")

firefox = webdriver.Firefox(options=options)


def scrape(url):
    firefox.get(url)

    posts = firefox.find_elements(By.CLASS_NAME, "col-md-4")
    # print(posts)

    result = []

    for post in posts:
        new_item = dict()
        new_item["title"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        new_item["link"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        # new_item["excerpt"] = post.find_element(
        #     By.CLASS_NAME, "entry-excerpt"
        # ).get_attribute("innerHTML")
        # print(new_item)
        result.append(new_item)

    return result


print(scrape("https://diolinux.com.br/"))
