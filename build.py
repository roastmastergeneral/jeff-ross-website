from os import path, getcwd, makedirs
from shutil import rmtree
from staticjinja import make_site


# We define constants for the deployment.
outputpath = path.join(getcwd(), 'site')


# Clean the output folder.
if path.exists(outputpath):
    rmtree(outputpath)


makedirs(outputpath)


site = make_site(
    filters={},
    outpath=outputpath,
    contexts=[(r'.*.html',)],
    staticpaths=['static']
)


# site.render()
site.render(use_reloader=True)
