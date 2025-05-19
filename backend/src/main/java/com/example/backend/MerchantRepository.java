package com.example.backend;

import com.example.backend.model.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


//this called the database properties
@Repository
public interface MerchantRepository extends JpaRepository<Merchant, Long>{
}
