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

userListData = '''
    WITH tmp AS (
        SELECT
	        tu.name AS userName
	        ,job.name  AS jobName
        FROM
	        testuser tu
        INNER JOIN userjob AS job on
	        tu.job_id = job.id
        WHERE
            job.id = '*userJob'
    )
    SELECT to_json(tmp) FROM tmp
    '''