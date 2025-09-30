import db from '../db/db.js'


export const increaseStockQuantity = (req, res) => {
    const {id} = req.params;
    const {stock_quantity} = req.body

    if(!stock_quantity || stock_quantity <= 0) {
        return res.status(400).json({error: "Increase amount must be greater than zero"})
    }

    // The Logic is first to get the corresponding stock quantity for the given product and then update(Increase) it by adding the previous value of stock quantity and the new value provided by the user
    const getStockQuantity = `SELECT name, description, Stock_Quantity FROM Products WHERE id = ?`
    db.get(getStockQuantity, [id], (err, row) => {
        if(err){
            console.error("DB Select error:", err);
            return res.status(500).json({error: "Database Error"})
        }
        if(!row){
            return res.status(404).json({error: "Product Not Found"});
        }
        const newStock = row.Stock_Quantity + stock_quantity;

        const updateStockQuantity = 'UPDATE Products SET Stock_Quantity = ? WHERE id = ?';
        db.run(updateStockQuantity, [newStock, id], function(err) {
            if(err){
                console.error("DB Update error:", err);
                return res.status(500).json({error: "Failed to update stock"});
            }
            res.status(200).json({
                id,
                old_stock_quantity: row.Stock_Quantity,
                newstock_quantity: stock_quantity,
                updated_quantity: newStock,
                message: "Stock Increased Successfully"
            })
        })
    })
}

export const decreaseStockQuantity = (req, res) => {
    const {id} = req.params;
    const {stock_quantity} = req.body

    if(!stock_quantity || stock_quantity <= 0) {
        return res.status(400).json({error: "Decrease amount must be greater than zero"})
    }

    const getStockQuantity = `SELECT name, description, Stock_Quantity FROM Products WHERE id = ?`
    db.get(getStockQuantity, [id], (err, row) => {
        if(err){
            console.error("DB Select error:", err);
            return res.status(500).json({error: "Database Error"})
        }
        if(!row){
            return res.status(404).json({error: "Product Not Found"});
        }
        const newStock = row.Stock_Quantity - stock_quantity;

        if(newStock < 0){
           return res.status(400).json({error: "Stock Quantity cannot go below zero"});
        }
        
        const updateStockQuantity = 'UPDATE Products SET Stock_Quantity = ? WHERE id = ?';
        db.run(updateStockQuantity, [newStock, id], function(err) {
            if(err){
                console.error("DB Update error:", err);
                return res.status(500).json({error: "Failed to update stock"});
            }
            res.status(200).json({
                id,
                old_stock_quantity: row.Stock_Quantity,
                decrease_by: stock_quantity,
                updated_quantity: newStock,
                message: "Stock Decreased Successfully"
            })
        })
    })
}