const Basket = require("../src/basket.js");
const Receipt = require("../src/receipt.js");

describe("Receipts", () => {
    let basket
    let receipt

    beforeEach(() => {
        basket = new Basket(40)
    });

    it("return a blank receipt", () => {
        const testReceipt = new Receipt
        const expected = ""
        const result = testReceipt.getReceipt([])
        expect(result).toEqual(expected);
    });

    it("returns a receipt with all purchases", () => {
        basket.addBagel('BGLP',1)
        const testReceipt = new Receipt(basket.countBagelsInBasket())
        const expected = `~~~ Bob's Bagels ~~~
        Thu Jun 09 2022 16:44:02 GMT+0100 (British Summer Time)
        
        Plain Bagel             0.39
        
        ---------------------
        Total :              1.95
         Thank You for your order`
        const result = testReceipt.getPurchaseList()
        testReceipt.getReceipt()
        expect(result).toEqual(expected);
    });

    // it("returns another receipt", () => {
    //     basket.addBagel('BGLO',4)
    //     basket.addBagel('BGLP',15)
    //     basket.addBagel('BGLE',7)
    //     basket.addBagel('COF',3)
    //     const testReceipt = new Receipt(basket.countBagelsInBasket())
    //     const expected = `Onion              4   £1.96\nPlain              15  £5.16\nEverything         7   £2.98\nCoffee             3   £2.97\n`
    //     const result = testReceipt.getPurchaseList()
    //     testReceipt.getReceipt()
    //     expect(result).toEqual(expected);
    // });

    // it("returns correct total", () => {
    //     basket.addBagel('BGLO',4)
    //     basket.addBagel('BGLP',15)
    //     basket.addBagel('BGLE',7)
    //     basket.addBagel('COF',3)
    //     const testReceipt = new Receipt(basket.countBagelsInBasket())
    //     const expected = basket.getTotal()
    //     console.log(testReceipt.getReceipt())
    //     const result = testReceipt.total
    //     expect(result).toEqual(expected);
    // });
})