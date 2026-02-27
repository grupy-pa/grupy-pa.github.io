import os
import yaml
from datetime import datetime

AUTHOR = 'itkcah.py'
SITENAME = 'GruPy PA'
#SITEURL = "https://pa.python.org.br/"
SITESUBTITLE="Comunidade de usuários e desenvolvedores que utilizam Python no Pará 🏳️‍🌈"

PATH = "content"
ARTICLE_PATHS = ['blog']
ARTICLE_SAVE_AS = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'
ARTICLE_URL = 'blog/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'

PAGE_PATHS = ['events']
PAGE_URL = 'events/{date:%Y}/{date:%m}/{date:%d}/{slug}/'
PAGE_SAVE_AS = 'events/{date:%Y}/{date:%m}/{date:%d}/{slug}.html'

THEME="themes/grupy-pa"

TIMEZONE = 'America/Sao_Paulo'

DEFAULT_LANG = 'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None

DEFAULT_PAGINATION = 10

def load_extradata(path, exclude_files=[], return_dict=False):
    yaml_files_path = os.path.join(".", f'extradata/{path}')
    try:
        all_files = [f for f in os.listdir(yaml_files_path) if f not in exclude_files and f.endswith('.yaml')]
    except FileNotFoundError:
        return []
        
    data = []
    for file in all_files:
        filepath = os.path.join(yaml_files_path, file)
        with open(filepath, 'r', encoding='utf-8') as stream:
            try:
                content = yaml.safe_load(stream)
                if content:
                    if return_dict:
                        data.append(content)
                    else:
                        data.append(tuple(content.values()))
            except yaml.YAMLError:
                continue
                
    if not return_dict:
        return tuple(data)
    return data

def load_communities():
    return load_extradata('communities', exclude_files=["template.yaml"])

def load_opened_events():
    events_raw = load_extradata('events', exclude_files=["template.yaml"], return_dict=True)
    events = list(events_raw) if isinstance(events_raw, (list, tuple)) else []
    today = datetime.now().date()
    
    # Filter only events that are 'scheduled' or have dates >= today
    # And parse their date strings to datetime objects for sorting
    open_events = []
    for evt in events:
        if not isinstance(evt, dict):
            continue
            
        status = evt.get('status')
        if status in ('completed', 'cancelled'):
            continue
            
        try:
            start_date_str = str(evt.get('start_date', ''))
            evt_date = datetime.strptime(start_date_str, '%Y-%m-%d').date()
            if evt_date >= today or status == 'scheduled':
                new_evt = dict(evt)
                new_evt['parsed_date'] = evt_date
                open_events.append(new_evt)
        except (ValueError, TypeError):
            if status == 'scheduled':
                open_events.append(dict(evt))
                
    # Sort chronologically
    open_events.sort(key=lambda x: x.get('parsed_date') or today)
    return open_events

COMMUNITIES = load_communities()
OPENED_EVENTS = load_opened_events()
# Uncomment following line if you want document-relative URLs when developing