from .commit import commit

def buyItem(company_id, brand, model, color, style, serial_number, price, image_url):
    return commit(
        "INSERT INTO inventory (company_id, brand, model, color, style, serial_number, price, image_url) "
        "VALUES (%s, %s, %s, %s, %s, %s, %s, %s) RETURNING id",
        (company_id, brand, model, color, style, serial_number, price, image_url)
    )
