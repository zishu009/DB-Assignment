1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
Answer: In the diagram, the relationship between the "Product" and "Product_Category" entities appears to be a one-to-many relationship, where one product can belong to only one product
category,but a product category can have multiple products associated with it.
This relationship is typically represented by a foreign key in the "Product" table that references the primary key in the "Product_Category" table. This foreign key establishes the
connection between the two tables, allowing each product to be linked to its corresponding product category.

2. How could you ensure that each product in the "Product" table has a valid category assigned to it?
Answer: To ensure that each product in the "Product" table has a valid category assigned to it, we can implement a database constraint known as a foreign key constraint.
Define a Foreign Key Constraint: In the "Product" table, create a foreign key constraint that references the primary key of the "Product_Category" table. This constraint will ensure that
every value entered into the column representing the product's category in the "Product" table must match an existing category in the "Product_Category" table.
Enforce Data Integrity: Ensure that the foreign key constraint is enforced at the database level, which prevents any attempts to insert or update a product with an invalid category.
By implementing this foreign key constraint, we guarantee that each product in the "Product" table references a valid category in the "Product_Category" table, thereby maintaining data
integrity and consistency in your database.
