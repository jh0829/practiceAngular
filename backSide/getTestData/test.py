from flask import Blueprint
from flask import *
from flask import request
from flask_cors import CORS

router = Blueprint('getTestData', __name__, url_prefix='/getTestData')
CORS(router)

###############################################################################################
@router.route('/dataTest',methods=['GET', 'POST'])
def dataTest():
    print ('dataTest start')
    message = {'greeting':'Hello from Flask!'}
    return jsonify(message)
    #return 'Hello Test World'

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
    #return 'Hello Test World'
    
###############################################################################################
if __name__ == "__main__":
    router.run(debug=True)