import React, { ReactNode, useEffect } from 'react';
import styles from './Button.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import { getCalApi } from "@calcom/embed-react";

interface ButtonProps {
  label: string | ReactNode;
  src?: string;
  className?: string; // Optional custom className
  onClick?: () => {};
}

const Button = ({ label, src = '', className = '' }: ButtonProps) => {

  useEffect(() => {
    (async function () {
      const calPopUp = await getCalApi({});
      calPopUp("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, [])

  return (
    <div className={`${styles.glowingWrapper} ${styles.glowingWrapperActive} mt-30 ${className}`}>
      <div className={styles.glowingWrapperAnimations}>
        <div className={styles.glowingWrapperGlow}></div>
        <div className={styles.glowingWrapperMaskWrapper}>
          <div className={styles.glowingWrapperMask}></div>
        </div>
      </div>
      <div className={styles.glowingWrapperBordersMasker}>
        <div className={styles.glowingWrapperBorders}></div>
      </div>
      <Link href={src}
        data-cal-namespace=""
        data-cal-link="six-man-info-tech/30min"
        data-cal-config='{"layout":"month_view"}'
        className={styles.glowingWrapperButton}>
        <div className={styles.buttonText}>{label}</div>
      </Link>
    </div>
  );
};

export default Button;