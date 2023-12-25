package com.example.springsecurityoauth2jwt.core.chat.entity;

import com.example.springsecurityoauth2jwt.common.BaseEntity;
import com.example.springsecurityoauth2jwt.core.user.entity.Account;
import jakarta.persistence.*;

@Entity
public class ChatHistory extends BaseEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "chat_room_id")
    private ChatRoom chatRoom;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id")
    private Account sender;

}
