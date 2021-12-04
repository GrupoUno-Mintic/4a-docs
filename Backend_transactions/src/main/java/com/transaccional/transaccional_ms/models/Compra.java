package com.transaccional.transaccional_ms.models;


import org.springframework.data.annotation.Id;

import java.util.Date;

public class Compra {
    @Id
    private String id_compra;
    private String user;
    private String id_producto;
    private String des_producto;
    private int cantidad;
    private int valor_producto;
    private Date date;
    private String cuentaTienda;
    private int valor_total;



    public Compra(String id_compra, String user, String id_producto, String des_producto,
                  Integer cantidad, Integer valor_producto, Date date, String cuentaTienda, Integer valor_total) {
        this.id_compra = id_compra;
        this.user = user;
        this.id_producto = id_producto;
        this.des_producto = des_producto;
        this.cantidad = cantidad;
        this.valor_producto = valor_producto;
        this.date = date;
        this.cuentaTienda = cuentaTienda;
        this.valor_total = valor_total;
    }

    public String getId_compra() {
        return id_compra;
    }

    public void setId_compra(String id_compra) {
        this.id_compra = id_compra;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getId_producto() {
        return id_producto;
    }

    public void setId_producto(String id_producto) {
        this.id_producto = id_producto;
    }

    public String getDes_producto() {
        return des_producto;
    }

    public void setDes_producto(String des_producto) {
        this.des_producto = des_producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public int getValor_producto() {
        return valor_producto;
    }

    public void setValor_producto(int valor_producto) {
        this.valor_producto = valor_producto;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getCuentaTienda() {
        return cuentaTienda;
    }

    public void setCuentaTienda(String cuentaTienda) {
        this.cuentaTienda = cuentaTienda;
    }

    public int getValor_total() {
        return valor_total;
    }

    public void setValor_total(int valor_total) {
        this.valor_total = valor_total;
    }
}