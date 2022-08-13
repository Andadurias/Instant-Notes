from cassandra.cluster import Cluster
import configparser
import uuid
config = configparser.ConfigParser()
config.read('../.config.ini')

keyspace = config['memories']['keyspace']
_port = int(config['memories']['port'])
ip = config['memories']['ip']

cluster = Cluster([ip],port=_port)
session = cluster.connect(keyspace, wait_for_all_pools=True)
session.execute(f'USE {keyspace}')

def insert_card(content):
    '''Content should be a dictionary with: 
    card_id uuid,
    user_id uuid,
    card text, 
    explicit_tags SET<text>,
    implicit_tags set<text>, 

    The function add:
    creation_time timestamp, 
    last_update timestamp
    '''
    '''
    cluster = Cluster([ip],port=_port)
    session = cluster.connect(keyspace, wait_for_all_pools=True)
    '''
    session.execute(f'USE {keyspace}')
    session.execute(
        """
        INSERT INTO store.cards 
        (user_id, card_id, card,  creation_time, last_update )
        VALUES (%s, uuid(), %s, toTimeStamp(now()), toTimeStamp(now()))
        """,
        (uuid.UUID(content['user_id']), 
        content['card'],
        #content['explicit_tags'], content['implicit_tags']
        )
    )

if __name__ == "__main__":
    content = {
        'user_id':'e04c9e80-194c-11ed-93ff-c57d679aad6d',
        'card' : " 22222222 222 Came we need to finish memories"
    }

    insert_card(content)
    rows = session.execute('SELECT * FROM cards')
    for row in rows:
        print(row)