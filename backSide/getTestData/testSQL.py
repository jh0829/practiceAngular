sql = '''
    WITH tmp AS (
        SELECT 
            test01.id as id,
            test01.name as name
        FROM test01."testUser" test01
    )
    SELECT to_json(tmp) FROM tmp
    '''

result = '''
    SELECT 
        test01.id as id,
        test01.name as name
    FROM test01."testUser" test01
    '''
sqlstring = "getMozi"
