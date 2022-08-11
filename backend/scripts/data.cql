-- Create a keyspace
CREATE KEYSPACE IF NOT EXISTS store WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' };

-- Create a table
CREATE TABLE IF NOT EXISTS store.cards (
card_id uuid,
user_id uuid,
card text, 
explicit_tags SET<text>,
implicit_tags set<text>, 
creation_time timestamp, 
last_update timestamp,

PRIMARY KEY ((card_id, user_id))
);

-- Insert some data
INSERT INTO store.cards
(user_id, card_id, card, explicit_tags, implicit_tags, creation_time, last_update )
VALUES (
    now(),
    uuid(), 
    'Hello this is a message',
    {'hello', 'texto', 'message'},
    {'greeting', 'empty'},
    toTimeStamp(now()),
    toTimeStamp(now())
);

INSERT INTO store.cards
(user_id, card_id, card, explicit_tags, implicit_tags, creation_time, last_update )
VALUES (
    now(),
    uuid(), 
    'Today I have given his present to Jose ',
    {'today', 'present', 'Jose'},
    {'memories'},
    toTimeStamp(now()),
    toTimeStamp(now())
);


-- Read some data 
SELECT * FROM store.cards;