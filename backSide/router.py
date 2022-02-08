from flask import Flask
from getTestData import test
from getSearchData import getSearchData

router = Flask(__name__)

router.register_blueprint(test.router)
router.register_blueprint(getSearchData.router)

if __name__ == '__main__':
    router.run(debug=True)