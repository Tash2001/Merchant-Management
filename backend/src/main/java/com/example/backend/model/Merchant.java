package com.example.backend.model;

import jakarta.persistence.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;


@Entity
@Table(name = "test_merchant")
public class Merchant {



    @Id

//    to automatically generate the primary key value, we can add the @GeneratedValue
//    IdentityGenerator,are auto-incremented.
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long mid;

    @Column(name ="full_name")
    private String fullName;

    @Column(name ="email")
    private String email;

    @Column(name ="user_name")
    private String userName;


@Column(name="password")
    private String password;

    @CreationTimestamp
@Column(name="create_date" ,length = 7, updatable = false)

    private Date createDate;

    @UpdateTimestamp
    @Column(name="updateDate",length = 7)

    private Date updateDate;


    public Merchant(){

    }

    public Merchant(String fullName, String email, String userName,String password,Date createDate,Date updateDate) {
        super();
        this.fullName = fullName;
        this.email = email;
        this.userName = userName;
        this.password= password;
        this.createDate=createDate;
        this.updateDate=updateDate;

    }

    public long getMid() {
        return mid;
    }

    public void setMid(long mid) {
        this.mid = mid;
    }

    public Date getCreateDate() {
        return createDate;
    }

    public void setCreateDate(Date createDate) {
        this.createDate = createDate;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Date getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(Date updateDate) {
        this.updateDate = updateDate;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }
}
