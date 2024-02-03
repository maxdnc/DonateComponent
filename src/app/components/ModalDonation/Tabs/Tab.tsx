'use client';
import React from 'react';
import styles from './Tab.module.scss';

interface TabProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
  isActive: boolean;
}

export default function Tab({ onClick, label, isActive }: TabProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isActive && styles.active}`}
    >
      <span>{label}</span>
    </button>
  );
}
