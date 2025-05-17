import requests
import json
from tools.database.addTrade import addTrade

url = "http://localhost:5000/api/trade/"
payload = {
    "company_id": 1,
    "value_in": 100,
    "items_in": [
        4,  
        {
            "color": "red",
            "serial_number": "ABC123",
            "brand": "Gibson",
            "model": "SG"
        },
        {
            "color": "white",
            "serial_number": "XYZ789",
            "brand": "Fender",
            "model": "Stratocaster"
        }
    ],
    "value_out": 75,
    "items_out": [7, 8]  # can be all existing IDs for now
}

from tools.general.processItems import processItems
payload["items_in"] = processItems(payload["items_in"])
payload["items_out"] = processItems(payload["items_out"])

response = requests.post(url, json=payload)

print("Status Code:", response.status_code)
print("Response JSON:", response)
