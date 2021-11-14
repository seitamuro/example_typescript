import React, { useContext, useEffect, useRef, useState } from "react"

import { sellers } from "../data"
import { Context } from "../data/context"

import { getUsers } from "./getUsers"
import { createUser } from "./createUser"
import UserModel from "./UserModel"

import { Menu, Popover } from "antd"
import { UserOutlined, MessageOutlined } from "@ant-design/icons"

export default function Navbar() {
    const didMountRef = useRef(false)
    const [current, _setCurrent] = useState(null)
    const { currentUser, setCurrentUser, setUsers } = useContext(Context)

    const syncUsers = () => {
        getUsers(users => {
            console.log("Fetched users", users)
            let usersWereAdded = false
            sellers.map(seller => {
                if(!users.find(user => seller.username === user.username)) {
                    console.log("Creating user", seller.username)
                    createUser(seller)
                    usersWereAdded = true
                }
            })
            if (usersWereAdded) window.location.reload()
            setUsers(users)
            setCurrentUser(sellers[0])
        })
    }

    useEffect(() => {
        if (!didMountRef.current) {
            didMountRef.current = true
            syncUsers()
        }
    })

    return (
        <div style={{ display: "inline-block", width: "100%", backgroundColor: "#bae7ff"}}>
            <Menu theme="dark" selectedKeys={[current]} mode="horizontal" style={{ height: "64px", textAlign: "right" }}>
                <a href="/">
                    <Menu.Item key="home" style={{ height: "64px", paddingTop: "12px", float: "left", fontSize: "22px" }}>
                        Marketplace
                    </Menu.Item>
                </a>

                <Menu.Item key="mail" icon={<MessageOutlined />} style={{ height: "64px", paddingTop:"10px", }}>
                    <a href="/chats">
                        My Chats
                    </a>
                </Menu.Item>

                <Menu.Item key="app" icon={<UserOutlined />} style={{ height: "64px", paddingTop: "10px"}}>
                    <Popover
                        placement="bottomRight"
                        title={null}
                        trigger="click"
                        content={<UserModel />}
                    >
                        {currentUser.first_name} {currentUser.last_name}
                    </Popover>
                </Menu.Item>
            </Menu>
        </div>
    )
}