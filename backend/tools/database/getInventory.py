from .execute import execute

def getInventory(company_id = None):
    if company_id is None: 
        return execute("SELECT * FROM inventory")
    else:
        return execute("SELECT * FROM inventory WHERE company_id = %s", (str(company_id),))

