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

jobData = '''
    WITH tmp AS (
        SELECT 
            "ID", 
            "Job"
	    FROM 
            test01."userJob"
	    order by 
            "ID"
    )
    SELECT to_json(tmp) FROM tmp
    '''