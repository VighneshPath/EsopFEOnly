class UpdateForm{
    constructor(customDocument){
        this.customDocument = customDocument;
    }

    updateEsopTypeDiv = ()=>{
        const buyOrSell = this.customDocument.getElementById("esop-order-type").value;
        const esopTypeDiv = this.customDocument.getElementById("esop-type-div");
        if(buyOrSell == "BUY"){
            esopTypeDiv.innerHTML = "";
        }
        else if(buyOrSell == "SELL"){
            const performanceTypeHtml = `              
            <label for="esop-type">Esop Type</label>
            <select id="esop-type">
              <option value="PERFORMANCE">PERFORMANCE</option>
              <option value="SELL">NON_PERFORMANCE</option>
            </select>
            `;
            esopTypeDiv.innerHTML = performanceTypeHtml;
        }
    }
}

export {UpdateForm};