from flask import Flask
from flask import Blueprint
from flask_cors import CORS
from flask import *
from flask import request
import http.server
import socketserver
import test

#with socketserver.TCPServer(('127.0.0.1', 5000), http.server.SimpleHTTPRequestHandler) as httpd:
 #   httpd.serve_forever()

getTestData = Blueprint('getTestData',__name__,url_prefix='/getTestData')
#CORS(app)

#PORT = 8000
#Handler = http.server.SimpleHTTPRequestHandler

#with socketserver.TCPServer(("", PORT), Handler) as httpd:
#    print("serving at port", PORT)
#    httpd.serve_forever()

###############################################################################################
@getTestData.route('/anotherDataTest',methods=['GET', 'POST'])
def dataTest():
    print ('dataTest start')
    message = {'greeting':'Hello from Flask!'}
    return jsonify(message)
    #return 'Hello Test World'

###############################################################################################
@getTestData.route('/postData',methods=['GET','POST'])
def getData():
    print ('anotherPostData start')
    # Angularからデータ取得
    name = request.form.get('name')
    age = request.form.get('age')
    print (request.json)

    message = {'greeting':'Name'} 
    return jsonify(message)
    #return 'Hello Test World'
###############################################################################################
if __name__ == "__main__":
    app.run(debug=True)