liveData = '''
    WITH tmp AS (
        SELECT 
            "ID", 
            "Area"
	    FROM 
            "liveArea"
	    order by 
            "ID"
    )
    SELECT to_json(tmp) FROM tmp
    '''

jobData = '''
    WITH tmp AS (
        SELECT 
            "ID", 
            "Job"
	    FROM 
            "userJob"
	    order by 
            "ID"
    )
    SELECT to_json(tmp) FROM tmp
    '''