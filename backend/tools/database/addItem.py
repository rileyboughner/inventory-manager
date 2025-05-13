from .commit import commit

def addItem(color, serial_number, brand, model):
    return commit("INSERT INTO inventory (color, serial_number, brand, model, company_id) VALUES (%s, %s, %s, %s, %s)", (color, serial_number, brand, model, '0'))
