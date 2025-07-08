"use client";

import { useState } from "react";
import styles from "./ProfileMenu.module.css";
import Image from "next/image";
import avatar from '@/public/assets/imagens/avatar.png';
import iconBack from '@/public/assets/icons/93634.png';

export function ProfileMenu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div
            className={styles.avatarWrapper}
            onMouseEnter={() => setShowMenu(true)}
            onMouseLeave={() => setShowMenu(false)}
        >
            <div className={styles.avatarContainer}>
                <Image src={avatar} alt="User Avatar" width={39} height={39} className={styles.avatar} />
            </div>

            {showMenu && (
                <div className={styles.dropdown}>
                    <div className={styles.option}>
                        <strong>My Profile</strong>
                        <p>Change settings of your account.</p>
                    </div>
                    <div className={styles.optionLogout}>
                        <Image src={iconBack} alt="User Avatar" width={16} height={16} />
                        <span>Logout</span>
                    </div>
                </div>
            )}
        </div>
    );
}
