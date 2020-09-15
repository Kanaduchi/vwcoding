#!/usr/bin/env python
# -*- coding: utf-8 -*-

from setuptools import setup

def get_description():
    """Get long description."""

    with open("README.md", 'r') as f:
        desc = f.read()
    return desc

with open("requirements.txt") as data:
    install_requires = [
        line for line in data.read().split("\n")
        if line and not line.startswith("#")
    ]

setup(
    name='mqb',
    version='1.0',
    url='https://github.com/Kanaduchi/mqb',
    license='MIT',
    description='VW Coding',
    long_description='VW Coding',
    long_description_content_type='text/markdown',
    author='kanaduchi',
    author_email='kanaduch@gmail.com',
    keywords='coding',
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
