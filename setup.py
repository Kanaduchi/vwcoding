#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
from setuptools import setup

# Load package.json contents
with open("package.json") as data:
    package = json.load(data)

with open("requirements.txt") as data:
    install_requires = [
        line for line in data.read().split("\n")
        if line and not line.startswith("#")
    ]

# Load README contents
with open("README.md", encoding="utf-8") as data:
    long_description = data.read()

setup(
    name=package["name"],
    version=package["version"],
    url=package["homepage"],
    license=package["license"],
    description=package["description"],
    long_description=long_description,
    long_description_content_type="text/markdown",
    author=package["author"]["name"],
    author_email=package["author"]["email"],
    keywords=package["keywords"],
    include_package_data=True,
    install_requires=install_requires,
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "License :: OSI Approved :: MIT License",
        "Programming Language :: JavaScript",
        "Programming Language :: Python",
        "Topic :: Documentation",
        "Topic :: Software Development :: Documentation",
        "Topic :: Text Processing :: Markup :: HTML"
    ]
)
