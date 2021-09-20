from flask import Flask
from getTestData import test
from getTestData import another

router = Flask(__name__)

router.register_blueprint(test.router)
#router.register_blueprint(another.router)

if __name__ == '__main__':
    router.run(debug=True)