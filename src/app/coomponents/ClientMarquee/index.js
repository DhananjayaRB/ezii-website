import React from 'react';
import Image from 'next/image';
import styles from './clientMarquee.module.scss';
import { clientLogos } from '@/app/constants';

const firstRowLogos = clientLogos.slice(0, 6);
const secondRowLogos = clientLogos.slice(6);

export default function ClientMarquee() {
    return (
        <div className={styles.clientMarqueeWrapper}>
            <div className={`${styles.clientMarquee} ${styles.leftToRight} ${styles.slow}`}>
                {[...firstRowLogos, ...firstRowLogos].map((logo, idx) => (
                    <div className={styles.clientLogo} key={`ltr-${idx}`}>
                        <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
                    </div>
                ))}
            </div>
            <div className={`${styles.clientMarquee} ${styles.rightToLeft} ${styles.slow}`}>
                {[...secondRowLogos, ...secondRowLogos].map((logo, idx) => (
                    <div className={styles.clientLogo} key={`rtl-${idx}`}>
                        <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
                    </div>
                ))}
            </div>
        </div>
    );
} 