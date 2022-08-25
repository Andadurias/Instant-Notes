from cassandra.cluster import Cluster
import configparser
import uuid
config = configparser.ConfigParser()
config.read('../.config.ini')

keyspace = config['memories']['keyspace']
_port = int(config['memories']['port'])
ip = config['memories']['ip']

def read_cards(request):
    '''Return all the de coincidences with content
    '''
    cluster = Cluster([ip],port=_port)
    session = cluster.connect(keyspace, wait_for_all_pools=True)
    session.execute(f'USE {keyspace}')

    session.execute(
        """
        
        (user_id, card_id, card,  creation_time, last_update, explicit_tags, implicit_tags)
        VALUES (%s, uuid(), %s, toTimeStamp(now()), toTimeStamp(now()), %s, %s)
        """,
        (uuid.UUID(content['user_id']), 
        content['card'],
        set(content['explicit_tags']), 
        set(content['implicit_tags']),
        )
    )
    cluster.shutdown()