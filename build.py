# -*- coding: utf-8 -*-

from os import path, getcwd, makedirs
from shutil import rmtree
from staticjinja import make_site

# We define constants for the deployment.
_SEARCHPATH = path.join(getcwd(), 'templates')
_OUTPUTPATH = path.join(getcwd(), 'site')


def cleanup():
    # Clean the output folder.
    if path.exists(_OUTPUTPATH):
        rmtree(_OUTPUTPATH)

    makedirs(_OUTPUTPATH)


if __name__ == '__main__':
    site = make_site(
        filters={},
        outpath=_OUTPUTPATH,
        contexts=[(r'.*.html',)],
        searchpath=_SEARCHPATH,
        staticpaths=['static']
    )

    cleanup()

    # site.render()
    site.render(use_reloader=True)
