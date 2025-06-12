from flask import Flask, jsonify, request
from flask_cors import CORS
from tools.database.getInventory import getInventory
from tools.database.addTrade import addTrade
from tools.database.buyItem import buyItem
from tools.database.addItem import addItem
from tools.general.processItems import processItems

import sys
import os

sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..")))
app = Flask(__name__)


# --- inventory ---
@app.route("/api/inventory/", defaults={"company_id": None})
@app.route("/api/inventory/<company_id>")
def get_inventory(company_id):
    return jsonify(getInventory(company_id))

# -- Buy --
@app.route("/api/buy", methods=["POST"])
def Buy():
    try:
        data = request.get_json()
        print(data)

        company_id = 0 #data.get("company_id")
        brand = data.get("brand")
        model = data.get("model")
        color = data.get("color")
        style = data.get("syle")
        serial_number = data.get("serial")
        price = data.get("price")
        image_url = data.get("image_url")

        result = buyItem(company_id, brand, model, color, style, serial_number, price, image_url)
        return jsonify({"success": True, "result": result}), 200

    except Exception as exception:
        print(exception)
        return jsonify({"success": False, "error": str(exception)}), 500

# --- trades ---
@app.route("/api/trade/", methods=["POST"])
def trade():
    try:
        data = request.get_json()
        company_id = data.get("company_id")
        value_in = data.get("value_in")
        items_in = data.get("items_in")
        value_out = data.get("value_out")
        items_out = data.get("items_out")

        # items_in = processItems(items_in)
        # items_out = processItems(items_out)

        result = addTrade(company_id, value_in, items_in, value_out, items_out)
        return jsonify({"success": True, "result": result}), 200

    except Exception as exception:
        print(exception)
        return jsonify({"success": False, "error": str(exception)}), 500


CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
if __name__ == "__main__":
    app.run()
