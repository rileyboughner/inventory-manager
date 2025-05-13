from .execute import execute

def getInventory():
    return execute("SELECT * FROM inventory")
