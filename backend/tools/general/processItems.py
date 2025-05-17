from ..database.addItem import addItem
import json

def processItems(items):
    processed_items = []

    if isinstance(items, str):
        items = json.loads(items)

    for item in items:
        if isinstance(item, int):
            processed_items.append(item)
        elif isinstance(item, dict):
            color = item.get("color")
            serial_number = item.get("serial_number")
            brand = item.get("brand")
            model = item.get("model")
            item_id = addItem(color, serial_number, brand, model)
            processed_items.append(item_id)

    return json.dumps(processed_items)
