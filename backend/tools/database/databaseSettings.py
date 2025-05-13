import psycopg2

def getDatabaseCursor():
    database = psycopg2.connect(
        dbname="mydb",
        user="dev",
        password="devpass",
        host="localhost"
    )

    return database, database.cursor()
