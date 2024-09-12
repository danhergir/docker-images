from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:8080"}})

@app.route('/getMyInfo')
def getMyInfo():
    value = {
        "name": "Daniel",
        "lastname": "Hernandez",
        "socialMedia":
        {
            "facebookUser": "danhergir",
            "instagramUser": "danhergir",
            "xUser": "danhergir",
            "linkedin": "danhergir",
            "githubUser": "danhergir",
        },
        "blog": "https://danhergir.com",
        "author": "Daniel Hernandez"
    }

    return jsonify(value)

if __name__ == '__main__':
    app.run(port=5000)