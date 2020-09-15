#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Setup pymdown-extensions."""

from setuptools import setup, find_packages
import os


def get_version():
    """Get version and version_info without importing the entire module."""

    import importlib.util

    path = os.path.join(os.path.dirname(__file__), 'pymdownx', '__meta__.py')
    spec = importlib.util.spec_from_file_location("__meta__", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    vi = module.__version_info__
    return vi._get_canonical(), vi._get_dev_status()


def get_requirements(req):
    """Load list of dependencies."""

    install_requires = []
    with open(req) as f:
        for line in f:
            if not line.startswith("#"):
                install_requires.append(line.strip())
    return install_requires


def get_description():
    """Get long description."""

    with open("README.md", 'r') as f:
        desc = f.read()
    return desc


VER, DEVSTATUS = get_version()


setup(
    name='mqb',
    version=VER,
    keywords='vw coding',
    description='Extension pack for Python Markdown.',
    long_description=get_description(),
    long_description_content_type='text/markdown',
    author='Andrey Topchiy',
    author_email='kanaduch@gmail.com',
    python_requires='>=3.5',
    url='https://github.com/Kanaduchi/mqb',
    packages=find_packages(exclude=['src']),
    install_requires=get_requirements("requirements.txt"),
    license='MIT License',
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