from flask import Blueprint
from flask import *
from flask import request
from flask_cors import CORS
import json
import psycopg2
import psycopg2.extras
from getSearchData import searchDataSQL

router = Blueprint('getSearchData', __name__, url_prefix='/getSearchData')
CORS(router)

# DB Connect
conn = psycopg2.connect(
    "host=localhost port=5432 dbname=postgres user=postgres password=test00")

# カーソルを取得します
cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

###############################################################################################
@router.route('/liveArea',methods=['GET', 'POST'])
def sqlLiveData():
    print ('sqlData start')
    # SQLを取得し、実行
    sql = searchDataSQL.liveData
    cur.execute(sql)
    # 結果を1行だけ取得し表示
    # print(cur.fetchall())
    result = cur.fetchall()
    print (result)
    # カーソルを閉じる
    #cur.close()
    return json.dumps(result, indent=4)
    
###############################################################################################
@router.route('/userJob',methods=['GET', 'POST'])
def sqlJobData():
    print ('sqlData start')
    # SQLを取得し、実行
    sql = searchDataSQL.jobData
    cur.execute(sql)
    # 結果を1行だけ取得し表示
    # print(cur.fetchall())
    result = cur.fetchall()
    print (result)
    # カーソルを閉じる
    #cur.close()
    return json.dumps(result, indent=4)
    
###############################################################################################

if __name__ == "__main__":
    router.run(debug=True)