from os import path, getcwd, makedirs, listdir, remove
from yaml import load
from shutil import rmtree
from staticjinja import make_site


# We define constants for the deployment.
searchpath = path.join(getcwd(), 'templates')
outputpath = path.join(getcwd(), 'site')

# We load the data we want to use in the templates.
DATA = load(open('data/data.yaml'))

# for item in DATA:
#     item['filters'] = ''

#     for k, v in item.iteritems():
#         if k not in ['download', 'github', 'dataset', 'url']:
#             item['filters'] += '__' + slugify(v.strip().lower())


def loadData():
    return {'data': DATA}


# Clean the output folder.
if path.exists(outputpath):
    rmtree(outputpath)

makedirs(outputpath)

site = make_site(
    filters=filters,
    outpath=outputpath,
    contexts=[(r'.*.html', loadData)],
    searchpath=searchpath,
    staticpaths=['static', '../data']
)

site.render(use_reloader=True)
