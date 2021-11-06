liveData = '''
    WITH tmp AS (
        SELECT 
            "ID", 
            "Area"
	    FROM 
            test01."liveArea"
	    order by 
            "ID"
    )
    SELECT to_json(tmp) FROM tmp
    '''
