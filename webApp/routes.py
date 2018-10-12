from flask import url_for, render_template, jsonify
from flask_restful import reqparse

from webApp import app


@app.route('/', methods=['GET'])
def index():
    return render_template('home.html')
