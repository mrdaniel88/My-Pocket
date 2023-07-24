"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, create_refresh_token, jwt_required, get_jwt_identity, get_jwt, get_jti
import json

api = Blueprint('api', __name__)
app = Flask(__name__)
bcrypt = Bcrypt(app)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/signup', methods=["POST"])
def create_user():
    data = request.get_json()
    print(data)
    new_user = User.query.filter_by(email=data["email"]).first()
    if (new_user is not None):
        return jsonify({"msg":"Email exists"}), 400
    secure_password = bcrypt.generate_password_hash(
        data["password"], rounds=None).decode("utf-8")
    print(new_user is None)
    new_user = User(first_name=data["first_name"], last_name=data["last_name"], email=data["email"], password=secure_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.serialize()), 201