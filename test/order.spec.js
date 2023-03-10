import { Order } from "../src/scripts/order/Order";
import { OrderApis } from "../src/scripts/api/OrderApis";
import axios from "axios";
import { CustomDocument } from "../src/scripts/documents/CustomDocument";
import { Axios } from "axios";

describe("should test Order", ()=>{
    beforeAll(()=>{

    });

    it("should place an order", ()=>{
        let dummyReturnData = {
            "errors":["user doesn't exist"]
        };
        let orderApiMock = new OrderApis();
        orderApiMock.post = jasmine.createSpy().and.returnValue(
            new Promise((resolve, reject)=>{
            reject({
                response: {
                    data: dummyReturnData
                }
            })
        }));
        let customDoc = new CustomDocument();
        customDoc.getElementById = jasmine.createSpy().and.returnValue(
            {
                innerHTML: "",
                removeChild : ()=>{
                    return true;
                }
            }
        );
        alert(customDoc);
        let order = new Order(orderApiMock, customDoc);

        order.placeOrder({"quantity":1, "price":10, "type":"BUY"});

        expect(orderApiMock.post).toHaveBeenCalled();
        console.log(customDoc.getElementById);
        expect(customDoc.getElementById).toHaveBeenCalled();
        //expect(customDocument.getElementById).toHaveBeenCalledTimes(1);
    });
})