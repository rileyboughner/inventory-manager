from .commit import commit

def addTrade(company_id, value_in, items_in, value_out, items_out):
    return commit("INSERT INTO trades (company_id, value_in, items_in, value_out, items_out) VALUES (%s, %s, %s, %s, %s)", (company_id, value_in, items_in, value_out, items_out))
