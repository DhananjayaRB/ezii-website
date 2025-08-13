"use client";

import React from "react";
import styles from "./headerWithImage.module.scss";
import Image from "next/image";

export default function HeaderWithImage({
    imageSrc,
    imageAlt,
    title,
    description,
    applyPurpleHue = false,
    imageSize = 80,
}) {
    return (
        <div className={styles.headerRow}>
            <div
                className={styles.illustration}
                style={{ height: imageSize, minWidth: imageSize }}
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={imageSize}
                    height={imageSize}
                    className={applyPurpleHue ? styles.illustrationImagePurple : styles.illustrationImage}
                    priority={false}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
            </div>
            <div className={styles.textGroup}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
        </div>
    );
}


