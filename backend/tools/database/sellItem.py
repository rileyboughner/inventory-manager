from .execute import execute


def sellItem(item_id, sale_price=None):
    if sale_price is not None:
        return execute(
            "UPDATE inventory SET is_available = FALSE, sale_price = %s WHERE id = %s RETURNING *",
            (sale_price, item_id),
        )
    else:
        return execute(
            "UPDATE inventory SET is_available = FALSE WHERE id = %s RETURNING *",
            (item_id,),
        )
