package com.example.backend.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//to set the status code of an HTTP response.
@ResponseStatus(value = HttpStatus.NOT_FOUND)
//trying to find the user a by id, if the User is not found then we will throw ResourceNotFoundException.
public class ResourceNotFoundException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public ResourceNotFoundException(String message){
        super(message);
    }
}
