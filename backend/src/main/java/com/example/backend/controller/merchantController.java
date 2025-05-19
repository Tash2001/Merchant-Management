package com.example.backend.controller;


import com.example.backend.MerchantRepository;
import com.example.backend.Service.MerchantService;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@CrossOrigin(origins = "http://localhost:4200")

//to create RESTful web services using Spring MVC. Spring RestController takes care of mapping request data to the defined request handler method
@RestController


//is used to map web requests to Spring Controller methods.
//"/api/v1/" is the standed url api and version 1
@RequestMapping("/api/v1/")
public class merchantController {

//    Spring @Autowired annotation is used for automatic dependency injection.
@Autowired
private MerchantService merchantService;

    @GetMapping("/test_merchant")
    public List<Merchant> getAllMerchants() {
        return merchantService.getAllMerchants();
    }

    @PostMapping("/test_merchant")
    public Merchant addMerchant(@RequestBody Merchant merchant) {
        return merchantService.addMerchant(merchant);
    }

//    @PostMapping("/test_merchant/{mid}")
//    public ResponseEntity<Merchant> loginMerchant(@PathVariable Long mid) {
//        return merchantService.addMerchant(merchant);
//    }

    @DeleteMapping("/test_merchant/{mid}")
    public ResponseEntity<Map<String, Boolean>> deleteMerchant(@PathVariable Long mid) {
        merchantService.deleteMerchant(mid);
        Map<String, Boolean> response = new HashMap<>();
        response.put("delete", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/test_merchant/{mid}")
    public ResponseEntity<Merchant> updateMerchant(@PathVariable Long mid, @RequestBody Merchant merchantDetails) {
        Merchant updatedMerchant = merchantService.updateMerchant(mid, merchantDetails);
        return ResponseEntity.ok(updatedMerchant);
    }


    @GetMapping("/test_merchant/{mid}")
    public ResponseEntity<Merchant> getMerchantById(@PathVariable Long mid) {
        Merchant merchant = merchantService.getMerchantById(mid);
        return ResponseEntity.ok(merchant);
    }
}


