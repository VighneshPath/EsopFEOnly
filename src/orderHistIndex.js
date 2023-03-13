import './styles/main.scss';
import './css/index.css';
import axios from 'axios';
import { CustomDocument } from './scripts/documents/CustomDocument';
import { ApiClient } from './scripts/api/ApiClient';
import { OrderApi } from './scripts/order/OrderApi';
import { OrderHistoryApi } from './scripts/orderHistory/OrderHistoryApi';
import { OrderHistory } from './scripts/orderHistory/OrderHistory';

let customDocument = new CustomDocument(document);

customDocument.addEventListener("DOMContentLoaded", ()=>{
    let orderHistApi = new OrderHistoryApi(axios);
    let orderHistory = new OrderHistory(orderHistApi, customDocument);
    orderHistory.getOrderHistory();
})