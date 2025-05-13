from .databaseSettings import getDatabaseCursor

def execute(query, data=None):
    conn, database = getDatabaseCursor()
    try:
        database.execute(query, data)
        rows = database.fetchall()
    finally:
        database.close()
        conn.close()

    return rows
