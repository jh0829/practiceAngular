from flask import Flask
from flask_cors import CORS
from flask import *


app = Flask(__name__)
CORS(app)

@app.route('/dataTest',methods=['GET', 'POST'])
def index():
    message = {'greeting':'Hello from Flask!'}
    return jsonify(message)
    #return 'Hello Test World'

if __name__ == "__main__":
    app.run(debug=True)