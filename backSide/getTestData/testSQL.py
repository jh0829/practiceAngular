sql = '''
    WITH tmp AS (
        SELECT 
            id as id,
            name as name
        FROM "testuser" 
    )
    SELECT to_json(tmp) FROM tmp
    '''

result = '''
    SELECT 
        id as id,
        name as name
    FROM "testuser" 
    '''
sqlstring = "getMozi"
