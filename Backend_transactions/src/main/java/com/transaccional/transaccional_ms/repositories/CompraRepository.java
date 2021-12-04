package com.transaccional.transaccional_ms.repositories;
import com.transaccional.transaccional_ms.models.Compra;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;

public interface CompraRepository extends MongoRepository<Compra, String> {
    List<Compra> findByUser (String user);
    List<Compra> findByCuentaTienda (String cuentaTienda);
    /*Compra findById_producto (String id_producto);
    List<Compra> findById_compra (String id_compra);
    List<Compra> findByDate (String date);*/
}
