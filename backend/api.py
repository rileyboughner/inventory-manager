from flask import Flask, jsonify
from tools.database.getInventory import getInventory
from tools.database.addItem import addItem
from tools.database.removeItemById import removeItemById

import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..')))

app = Flask(__name__)

@app.route('/api/inventory/')
def get_inventory():
    return jsonify(getInventory())



if __name__ == '__main__':
    app.run(debug=True)
