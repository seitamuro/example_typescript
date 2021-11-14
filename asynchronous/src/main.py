from logging import ERROR
from flask import Flask, request
#from UserModel import User
#from setting import session
from sqlalchemy import *
from sqlalchemy.orm import *
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["POST"])
def register_record():
    name = request.form["name"]
    text = request.form["text"]

    return "{}|{}".format(name, text)

@app.route("/", methods=["GET"])
def fetch_record():
    name = request.args.get("name")

    return "unimplements"

if __name__ == "__main__":
    app.run()