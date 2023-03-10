class CustomDocument{
    constructor(document){
        this.document = document;
    }

    getElementById(element){
        return this.document.getElementById(element);
    }

    addEventListener(element, fun){
        return this.document.addEventListener(element, fun);
    }
}

export {CustomDocument};