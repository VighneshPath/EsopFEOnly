class PriceOrQuantityNotPositiveError extends Error {
    constructor(message = "Price and Quantity must be positive") {
      super(message);
      this.name = "PriceOrQuantityNotPositiveError"; 
    }
}

class InvalidTypeError extends Error{
    constructor(message = "Type must be buy or sell") {
        super(message);
        this.name = "InvalidTypeError"; 
    }
}

class InvalidEsopTypeError extends Error{
    constructor(message = "Esop Type must be performance or non performance") {
        super(message);
        this.name = "InvalidEsopTypeError"; 
    }
}

export {PriceOrQuantityNotPositiveError, InvalidTypeError, InvalidEsopTypeError};