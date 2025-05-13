from .commit import commit

def removeItemById(id):
    commit("DELETE FROM inventory WHERE id = %s ", (id,))
