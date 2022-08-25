from cassandra.cluster import Cluster
import configparser
import uuid
config = configparser.ConfigParser()
config.read('../.config.ini')

keyspace = config['memories']['keyspace']
_port = int(config['memories']['port'])
ip = config['memories']['ip']

def delete(card_id, user_id):
    '''Delete a card based on: 
    card_id uuid,
    user_id uuid,
    '''
    cluster = Cluster([ip],port=_port)
    session = cluster.connect(keyspace, wait_for_all_pools=True)
    session.execute(f'USE {keyspace}')

    session.execute(
        """
        DELETE * FROM card WHERE 
        card_id=%s AND user_id=%s;
        """,
        (   uuid.UUID(card_id), 
            uuid.UUID(user_id), 
        )
    )
    cluster.shutdown()


