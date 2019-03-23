select p.name, o.complete_on
    from products as p
    inner join line_items as li ON li.product_id = p.id 
    inner join orders as o on li.order_id = o.id
    where o.completed_on > current_date - interval '24 month'
    order by o.completed_on DESC;