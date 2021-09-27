from flask import Blueprint
from flask import *
from flask import request
from flask_cors import CORS
import json
import psycopg2
import psycopg2.extras
from getTestData import testSQL

router = Blueprint('getTestData', __name__, url_prefix='/getTestData')
CORS(router)

# DB Connect
conn = psycopg2.connect(
    "host=localhost port=5432 dbname=testDataBase user=postgres password=test00")

# カーソルを取得します
cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

###############################################################################################
@router.route('/dataTest',methods=['GET', 'POST'])
def dataTest():
    print ('dataTest start')
    message = {'greeting':'Hello from Flask!'}
    return jsonify(message)

###############################################################################################
@router.route('/postData',methods=['GET','POST'])
def postData():
    print ('postData start')
    # AngularからJSONデータ取得
    req = request.json
    print(req)
    name = request.json['name']
    age = request.json['age']
    print(name)
    print(age)

    message = {'greeting':'Name'} 
    return request.json

###############################################################################################
@router.route('/sqlData',methods=['GET', 'POST'])
def sqlData():
    print ('sqlData start')
    message = {'greeting':'Hello from Flask!'}
    # SQLを取得し、実行
    sql = testSQL.sql
    cur.execute(sql)
    # 結果を1行だけ取得し表示
    #print(cur.fetchall())
    result = cur.fetchall()
    print (result)
    # カーソルを閉じる
    #cur.close()
    return json.dumps(result, indent=4)
    
###############################################################################################
if __name__ == "__main__":
    router.run(debug=True)