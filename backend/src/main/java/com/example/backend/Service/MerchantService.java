package com.example.backend.Service;


import com.example.backend.MerchantRepository;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.model.Merchant;
import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MerchantService {

    @Autowired
    private MerchantRepository merchantRepository;


    public List<Merchant> getAllMerchants() {
        return merchantRepository.findAll();
    }


    public Merchant addMerchant(Merchant merchant) {
        return merchantRepository.save(merchant);
    }

    public void deleteMerchant(Long mid) {
        Merchant merchant = merchantRepository.findById(mid)
                .orElseThrow(() -> new ResourceNotFoundException("Merchant not exist with id: " + mid));
        merchantRepository.delete(merchant);
    }

    public Merchant updateMerchant(Long mid, Merchant merchantDetails) {
        Merchant merchant = merchantRepository.findById(mid)
                .orElseThrow(() -> new ResourceNotFoundException("Merchant not exist with id : " + mid));

        merchant.setFullName(merchantDetails.getFullName());
        merchant.setEmail(merchantDetails.getEmail());
        merchant.setUserName(merchantDetails.getUserName());
        merchant.getUpdateDate();

        return merchantRepository.save(merchant);
    }
    public Merchant getMerchantById(Long id) {
        return merchantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Merchant not found with id: " + id));
    }
}

