package com.transaccional.transaccional_ms.models;

import org.springframework.data.annotation.Id;
import java.util.Date;
public class Account {
    @Id
    private String username;
    private Integer saldo;
    private Date lastChange;

    public Account() {
    }

    public Account(String username, Integer saldo, Date lastChange) {
        this.username = username;
        this.saldo = saldo;
        this.lastChange = lastChange;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public Integer getSaldo() {
        return saldo;
    }
    public void setSaldo(Integer saldo) {
        this.saldo = saldo;
    }
    public Date getLastChange() {
        return lastChange;
    }
    public void setLastChange(Date lastChange) {
        this.lastChange = lastChange;
    }
}