liveData = '''
    WITH tmp AS (
        SELECT 
            "id", 
            "name"
	    FROM 
            "livearea"
	    order by 
            "id"
    )
    SELECT to_json(tmp) FROM tmp
    '''

jobData = '''
    WITH tmp AS (
        SELECT 
            "id", 
            "name"
	    FROM 
            "userjob"
	    order by 
            "id"
    )
    SELECT to_json(tmp) FROM tmp
    '''