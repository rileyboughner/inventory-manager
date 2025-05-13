from .databaseSettings import getDatabaseCursor

def commit(query, data=None):
    conn, database = getDatabaseCursor()
    try:
        database.execute(query, data)
        conn.commit()
    finally:
        database.close()
        conn.close()
