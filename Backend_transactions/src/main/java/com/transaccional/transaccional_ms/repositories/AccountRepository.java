package com.transaccional.transaccional_ms.repositories;

import com.transaccional.transaccional_ms.models.Account;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AccountRepository extends MongoRepository <Account, String> { }
