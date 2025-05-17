from .databaseSettings import getDatabaseCursor

def execute(query, data=None, fetch=True):
    conn, database = getDatabaseCursor()
    try:
        database.execute(query, data)

        if fetch:
            if database.description is None:
                return []  # No data returned, likely not a SELECT

            colnames = [desc[0] for desc in database.description]
            rows = database.fetchall()
            return [dict(zip(colnames, row)) for row in rows]
        else:
            conn.commit()
            return None
    finally:
        database.close()
        conn.close()
