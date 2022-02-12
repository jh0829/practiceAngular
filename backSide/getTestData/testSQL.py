sql = '''
    WITH tmp AS (
        SELECT 
            id as id,
            name as name
        FROM "testUser" 
    )
    SELECT to_json(tmp) FROM tmp
    '''

result = '''
    SELECT 
        id as id,
        name as name
    FROM "testUser" 
    '''
sqlstring = "getMozi"
