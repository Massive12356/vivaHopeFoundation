import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "home";
  size?: "sm" | "md" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  "aria-label"?: string;
  className?: string;
  target?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  onClick,
  href,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
  className = "",
  target = '_blank'
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 focus:outline-none focus-visible:ring-2 
    focus-visible:ring-primary-500 focus-visible:ring-offset-2 
    dark:focus-visible:ring-offset-gray-800 disabled:opacity-50 
    disabled:cursor-not-allowed
  `;

  const variantClasses = {
    // Primary buttons now have your gradient hover effect
    primary: `
      bg-primary-500 text-white shadow-md
      hover:bg-gradient-to-r
      hover:from-primary-600 hover:to-primary-400
      hover:shadow-lg
    `,
    secondary: `
      bg-secondary-500 text-white shadow-md
      hover:bg-gradient-to-r
      hover:from-secondary-600 hover:to-secondary-400
      hover:shadow-lg
    `,
    outline: `
      border-2 border-secondary-500 text-secondary-500
      hover:bg-gradient-to-r
      hover:from-secondary-50 hover:to-secondary-100
    `,
    ghost: `
      text-tertiary-500
      hover:bg-gradient-to-r
      hover:from-tertiary-100 hover:to-tertiary-200
    `,
    home: `
      bg-white text-black shadow-md 
      hover:bg-gradient-to-r hover:from-secondary-600 hover:to-secondary-400 
      hover:shadow-lg hover:text-white transition-all duration-300
    `,
  };  

  const sizeClasses = {
    sm: "px-3 py-2 text-sm gap-2",
    md: "px-4 py-2.5 text-base gap-2",
    lg: "px-6 py-3 text-lg gap-3",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <>
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5 mr-2" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5 ml-2" />}
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        aria-label={ariaLabel}
        {...motionProps}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
      {...motionProps}
      formTarget="_blank"
    >
      {buttonContent}
    </motion.button>
  );
};
