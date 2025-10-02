import db from '../db/db.js'

// Get All Properties (GET)

export const getAllProducts = (req, res) => {
    db.all('SELECT * FROM Products', (err, rows) => {
        if(err){
            console.error('Database Read Error:', err);
            return res.status(500).json({error: 'Failed to fetch Properties'})
        }
        res.status(200).json(rows)
    })
}

// Get Property By Id
export const getProductById = (req, res) => {
    const {id} = req.params;
    db.get('SELECT * FROM Products WHERE id = ?',[id], (err, rows) => {
        if(err){
            console.err('Database Read Error:', err);
            return res.status(500).json({error: 'Failed to fetch Properties for the given id "${id}"'});
        }
        if(!rows){
        return res.status(404).json({error: 'Product not found'});
    }
        res.status(200).json(rows)
    })
}

export const createProducts = (req, res) => {
    const {name, description, stock_quantity, low_stock_threshold} = req.body;
    const sql = `
    INSERT INTO Products (Name, Description, Stock_Quantity, Low_Stock_Threshold) VALUES (?, ?, ?, ?)`;
    const params = [
        name, description, stock_quantity, low_stock_threshold || 30
    ];

    db.run(sql, params, function (err) {
        if(err){
            console.error('DB Insert error:', err);
            return res.status(500).json({error: 'Failed to create product'})
        }
        res.status(201).json({id: this.lastId, message: 'Product Created Successfully'})
    });
};

export const updateProducts = (req, res) => {
    const {id} = req.params;
    const {name, description, stock_quantity} = req.body;

    const sql = `
    UPDATE Products SET
    Name = ?,
    Description = ?,
    Stock_Quantity = ?
    WHERE id = ?
    `;
     const params = [
        name, description, stock_quantity, id
    ];
    db.run(sql, params, function (err){
        if(err){
            console.error('DB Update Error:', err);
            return res.status(500).json({error: 'Failed to update product'})
        }
        if(this.changes === 0) {
           return res.status(404).json({error: 'Product not found'})
        }
        res.status(200).json({message: 'Product Updated', changes: this.changes
        })
    });
};

export const deleteProducts = (req, res) => {
    const {id} = req.params;
    db.run('DELETE FROM Products WHERE id = ?', [id],
        function(err){
            if(err){
                console.error('DB Delete Error:', err);
                return res.status(500).json({error: 'Failed to Delete Product'})
            }
            if(this.changes === 0){
                return res.status(400).json({error: 'Product not found'})
            }
            res.json({message: 'Product deleted', changes: this.changes});
        });
};

