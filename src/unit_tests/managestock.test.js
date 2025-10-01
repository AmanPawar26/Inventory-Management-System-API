import {decreaseStockQuantity, increaseStockQuantity} from '../controllers/managestock.controller.js'
import db from '../db/db.js'

jest.mock("../db/db.js", () => ({
    get: jest.fn(),
    run: jest.fn()
}));

describe('Unit Tests for Increasing Stock Quantity', () => {
    let req, res;

    beforeEach(() => {
        req = {params: {id: 1},  body: {} };
        res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn()
        };
        jest.clearAllMocks();
    }) 
    it("should return 400 if provided stock_quantity <= 0", () => {
        req.body.provided_stock_quantity = 0;

        increaseStockQuantity(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: "Increase amount must be greater than zero"})
    })
    it("Should increase stock quantity correctly", () => {
        req.body.stock_quantity = 5;

        db.get.mockImplementation((sql, params, callback) => {
            callback(null, {Stock_Quantity: 10});
        })

        db.run.mockImplementation((sql, params, callback) => {
            callback(null);
        })

        increaseStockQuantity(req, res)
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            old_stock_quantity: 10,
            updated_quantity: 15,
            message: "Stock Increased Successfully"

        }))
    })
})

describe("Unit Tests to Decrease Stock Quantity", () => {
    let req, res;

    beforeEach(() => {
         req = {params: {id: 1},  body: {} };
        res = {
              status: jest.fn().mockReturnThis(),
              json: jest.fn()
        };
        jest.clearAllMocks();
    })
    it("Should return 400 if provided stock_quantity <= 0", () => {
        req.body.stock_quantity = -2;

        decreaseStockQuantity(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: "Decrease amount must be greater than zero"})
    })
    it("Should decrease stock quantity correctly", () => {
        req.body.stock_quantity = 10

        db.get.mockImplementation((sql, params, callback) => {
            callback(null, {Stock_Quantity: 20})
        })

        db.run.mockImplementation((sql, params, callback) => {
            callback(null);
        })

        decreaseStockQuantity(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            old_stock_quantity: 20,
            updated_quantity: 10,
            message: "Stock Decreased Successfully"
        }))
    })

    it("Should return error when user tries to remove more stack than it is currently available", () => {
        req.body.stock_quantity = 20;

        db.get.mockImplementation((sql, params, callback) => {
            callback(null, {Stock_Quantity: 10});
        })

        decreaseStockQuantity(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({error: "Insufficient stock is available"})
    })


})