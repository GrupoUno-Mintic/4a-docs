package com.transaccional.transaccional_ms.controllers;

import com.transaccional.transaccional_ms.exceptions.AccountNotFoundException;
import com.transaccional.transaccional_ms.exceptions.InsufficientSaldoException;
import com.transaccional.transaccional_ms.models.Account;
import com.transaccional.transaccional_ms.models.Compra;
import com.transaccional.transaccional_ms.repositories.AccountRepository;
import com.transaccional.transaccional_ms.repositories.CompraRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@RestController
public class ComprasController {
    private final AccountRepository accountRepository;
    private final CompraRepository compraRepository;
    public ComprasController(AccountRepository accountRepository, CompraRepository compraRepository) {
        this.accountRepository = accountRepository;
        this.compraRepository = compraRepository;
    }

    @PostMapping("/compras")
    Compra newCompra(@RequestBody Compra compra){
        Account accountOrigin =
                accountRepository.findById(compra.getUser()).orElse(null);
            if (accountOrigin == null)
            throw new AccountNotFoundException("No se encontro una cuenta con el username: "
                    + compra.getUser());
        Account accountTienda=
                accountRepository.findById(compra.getCuentaTienda()).orElse(null);
        if (accountTienda == null)
            throw new AccountNotFoundException("Por favor verifique que la cuenta de la Tienda este bien escrita: "
                    + compra.getCuentaTienda());
         compra.setValor_total(compra.getValor_producto()*compra.getCantidad());
        if(accountOrigin.getSaldo() < compra.getValor_total())
            throw new InsufficientSaldoException("Saldo Insuficiente, recuerda recargar tu tarjeta");
        accountOrigin.setSaldo(accountOrigin.getSaldo() - compra.getValor_total());
        accountOrigin.setLastChange(new Date());
        accountRepository.save(accountOrigin);
        accountTienda.setSaldo(accountTienda.getSaldo()+compra.getValor_total());
        accountTienda.setLastChange(new Date());
        accountRepository.save((accountTienda));
        compra.setCuentaTienda("Tienda Deportiva Minball");
        compra.setDate(new Date());
        return compraRepository.save(compra);
    }


    @GetMapping("/compras/{username}")
    List<Compra> userCompra(@PathVariable String username){
        Account userAccount = accountRepository.findById(username).orElse(null);
        if (userAccount == null)
            throw new AccountNotFoundException("No se encontro una cuenta con el username: "
                    + username);
        List<Compra> usuarioCompra =
                compraRepository.findByUser(username);
        List<Compra> transactionsTienda =
                compraRepository.findByCuentaTienda(username);
        List<Compra> compras = Stream.concat(usuarioCompra.stream(),
                transactionsTienda.stream()).collect(Collectors.toList());
        return compras;
    }



}
