"use client";
import React from "react";

type CTAButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  pulse?: boolean;
  className?: string;
  ariaLabel?: string;
};

export function CTAButton({ href, onClick, children, pulse, className, ariaLabel }: CTAButtonProps) {
  const classes = `btn-cta ${pulse ? "btn-cta--pulse" : ""} ${className ?? ""}`.trim();
  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}

