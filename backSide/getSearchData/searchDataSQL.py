liveData = '''
    WITH tmp AS (
        SELECT 
            "id", 
            "area_name"
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
            "job"
	    FROM 
            "userjob"
	    order by 
            "id"
    )
    SELECT to_json(tmp) FROM tmp
    '''