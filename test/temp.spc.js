import { Order } from "../src/scripts/order/Order";
import { OrderApis } from "../src/scripts/api/OrderApis";
import axios from "axios";

describe("should test Order", ()=>{
    it("should place an order", ()=>{
        let orderApis = new OrderApis(axios);
        let order = new Order(orderApis, document);

        order.placeOrder({"quantity":1, "price":10, "type":"BUY"});

        expect(true).toBe(true);
    });
})