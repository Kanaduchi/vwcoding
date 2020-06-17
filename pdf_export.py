from bs4 import BeautifulSoup

def get_stylesheet() -> str:
    return """

    @page {
        size: a4 portrait;
        margin: 15mm 10mm 15mm 0mm;
        counter-increment: page;
        font-family: "Roboto","Helvetica Neue",Helvetica,Arial,sans-serif;
        white-space: pre;
        color: grey;
        @top-left {
            content: '©2020 https://www.vwcoding.ru/ ';
        }
        @top-right {
            content: 'Страница ' counter(page);
        }
    }

    h1, h2, h3 {
         string-set: chapter content();
    }
    
    .md-container {
        display: block;
        padding-top: 0;
    }
    
    .md-main {
        display: block;
        height: inherit;
    }
       
    .md-typeset .codehilitetable .linenos {
        display: none;
    }
    
    .md-typeset .footnote-ref {
        display: inline-block;
    }
    
    .md-typeset .admonition {
        display: block;
        border-top: .1rem solid rgba(0,0,0,.07);
        border-right: .1rem solid rgba(0,0,0,.07);
        border-bottom: .1rem solid rgba(0,0,0,.07);
        page-break-inside: avoid;
    }
    
    .md-typeset a::after {
        color: inherit;
        content: none;
    }
    
    .md-typeset table:not([class]) th {
        min-width: 0;
    }
    
    .md-typeset table {
        border: .1rem solid rgba(0,0,0,.07);
    }
    """


def modify_html(html: str, href: str) -> str:
    soup = BeautifulSoup(html, 'html.parser')
    a = soup.new_tag('a', href=href, title='Скачать страницу в формате PDF', download=None)
    a['class'] = 'md-icon md-content__button'
    icon = '<svg style="width:32px;height:32px" viewBox="0 0 24 24"><path fill="currentColor" d="M17,13L12,18L7,13H10V9H14V13M19.35,10.03C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.03C2.34,8.36 0,10.9 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.03Z"></path></svg>'
    icon = BeautifulSoup(icon, 'html.parser')
    a.insert(0, icon)
    soup.article.insert(0, a)

    return str(soup)
