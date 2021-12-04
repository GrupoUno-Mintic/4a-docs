package com.transaccional.transaccional_ms.exceptions;

public class InsufficientSaldoException extends RuntimeException {
    public InsufficientSaldoException(String message) {
        super(message);
    }
}
