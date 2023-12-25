package com.example.springsecurityoauth2jwt.core.chat.entity;

import com.example.springsecurityoauth2jwt.common.BaseEntity;
import com.example.springsecurityoauth2jwt.core.user.entity.Account;
import jakarta.persistence.*;

import java.util.List;

@Entity
public class ChatRoom extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="seller_id")
    private Account seller;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="buyer_id")
    private Account buyer;

    @OneToMany(mappedBy = "chatRoom")
    @OrderBy("createdAt asc")
    private List<ChatHistory> chatHistories;

}