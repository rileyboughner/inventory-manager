from .databaseSettings import getDatabaseCursor

def commit(query, data=None):
    conn, database = getDatabaseCursor()
    try:
        print("Running query:", query)
        print("With data:", data)
        database.execute(query, data)

        # Only fetch if 'RETURNING' is in the query
        if "RETURNING" in query.upper():
            result = database.fetchone()
            print("Fetched result:", result)
            conn.commit()
            return result[0] if result else None
        else:
            conn.commit()
            return None
    finally:
        database.close()
        conn.close()
