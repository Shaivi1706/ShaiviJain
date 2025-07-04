// "use client";
// import { cn } from "@/app/lib/utils";
// import { IconMenu2, IconX } from "@tabler/icons-react";
// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "motion/react";

// import React, { useRef, useState } from "react";

// interface NavbarProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface NavBodyProps {
//   children: React.ReactNode;
//   className?: string;
//   visible?: boolean;
// }

// interface NavItemsProps {
//   items: {
//     name: string;
//     link: string;
//   }[];
//   className?: string;
//   onItemClick?: () => void;
// }

// interface MobileNavProps {
//   children: React.ReactNode;
//   className?: string;
//   visible?: boolean;
// }

// interface MobileNavHeaderProps {
//   children: React.ReactNode;
//   className?: string;
// }

// interface MobileNavMenuProps {
//   children: React.ReactNode;
//   className?: string;
//   isOpen: boolean;
// }

// export const Navbar = ({ children, className }: NavbarProps) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollY } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const [visible, setVisible] = useState<boolean>(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     if (latest > 100) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   });

//   return (
//     <motion.div
//       ref={ref}
//       // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
//       className={cn("fixed top-0 left-0 w-full z-50", className)}
//     >
//       {React.Children.map(children, (child) =>
//         React.isValidElement(child)
//           ? React.cloneElement(
//               child as React.ReactElement<{ visible?: boolean }>,
//               { visible },
//             )
//           : child,
//       )}
//     </motion.div>
//   );
// };

// export const NavBody = ({ children, className, visible }: NavBodyProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? "blur(10px)" : "none",
//         boxShadow: visible
//           ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
//           : "none",
//         width: visible ? "40%" : "100%",
//         y: visible ? 20 : 0,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 200,
//         damping: 50,
//       }}
//       style={{
//         minWidth: "800px",
//       }}
//       className={cn(
//         "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
//         visible && "border-blue-700",
//         className,
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
//   const [hovered, setHovered] = useState<number | null>(null);

//   return (
//     <motion.div
//       onMouseLeave={() => setHovered(null)}
//       className={cn(
//         "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
//         className,
//       )}
//     >
//       {items.map((item, idx) => (
//         <a
//           onMouseEnter={() => setHovered(idx)}
//           onClick={onItemClick}
//           className="relative text-lg px-4 py-2 text-white hover:text-blue-950"
//           key={`link-${idx}`}
//           href={item.link}
//         >
//           {hovered === idx && (
//             <motion.div
//               layoutId="hovered"
//               className="absolute inset-0 h-full w-full rounded-full bg-radial from-purple-400 to-blue-200"
//             />
//           )}
//           <span className="relative z-20">{item.name}</span>
//         </a>
//       ))}
//     </motion.div>
//   );
// };

// export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
//   return (
//     <motion.div
//       animate={{
//         backdropFilter: visible ? "blur(10px)" : "none",
//         boxShadow: visible
//           ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
//           : "none",
//         width: visible ? "90%" : "100%",
//         paddingRight: visible ? "12px" : "0px",
//         paddingLeft: visible ? "12px" : "0px",
//         borderRadius: visible ? "4px" : "2rem",
//         y: visible ? 20 : 0,
//       }}
//       transition={{
//         type: "spring",
//         stiffness: 200,
//         damping: 50,
//       }}
//       className={cn(
//         "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
//         visible && "",
//         className,
//       )}
//     >
//       {children}
//     </motion.div>
//   );
// };

// export const MobileNavHeader = ({
//   children,
//   className,
// }: MobileNavHeaderProps) => {
//   return (
//     <div
//       className={cn(
//         "flex w-full flex-row items-center justify-between",
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const MobileNavMenu = ({
//   children,
//   className,
//   isOpen,
// }: MobileNavMenuProps) => {
//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className={cn(
//             "absolute inset-x-0 top-8 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-blue-950 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//             className,
//           )}
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// export const MobileNavToggle = ({
//   isOpen,
//   onClick,
// }: {
//   isOpen: boolean;
//   onClick: () => void;
// }) => {
//   return isOpen ? (
//     <IconX className="text-blue-950" onClick={onClick} />
//   ) : (
//     <IconMenu2 className="text-blue-500" onClick={onClick} />
//   );
// };

// export const NavbarLogo = () => {
//   return (
//     <a
//       href="#"
//       className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-xl font-normal text-black"
//     >
//       {/* <img
//         src="https://assets.aceternity.com/logo-dark.png"
//         alt="logo"
//         width={30}
//         height={30}
//       /> */}
//       <span className="relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 animate-text-glow">
//         Shaivi Jain
//       </span>
//     </a>
//   );
// };

// export const NavbarButton = ({
//   href,
//   as: Tag = "a",
//   children,
//   className,
//   variant = "primary",
//   ...props
// }: {
//   href?: string;
//   as?: React.ElementType;
//   children: React.ReactNode;
//   className?: string;
//   variant?: "primary" | "secondary" | "dark" | "gradient";
// } & (
//   | React.ComponentPropsWithoutRef<"a">
//   | React.ComponentPropsWithoutRef<"button">
// )) => {
//   const baseStyles =
//     "px-4 py-2 rounded-md bg-white button bg-white text-black text-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

//   const variantStyles = {
//     primary:
//       "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     secondary: "bg-transparent shadow-none dark:text-white",
//     dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
//     gradient:
//       "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
//   };

//   return (
//     <Tag
//       href={href || undefined}
//       className={cn(baseStyles, variantStyles[variant], className)}
//       {...props}
//     >
//       {children}
//     </Tag>
//   );
// };

"use client";
import { cn } from "@/app/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState, useCallback, useMemo } from "react";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    name: string;
    link: string;
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  // Throttle scroll events to reduce computation
  const handleScrollChange = useCallback((latest: number) => {
    const shouldBeVisible = latest > 100;
    setVisible(prev => prev !== shouldBeVisible ? shouldBeVisible : prev);
  }, []);

  useMotionValueEvent(scrollY, "change", handleScrollChange);

  return (
    <motion.div
      ref={ref}
      className={cn("fixed top-0 left-0 w-full z-50", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  // Memoize animation values to prevent unnecessary recalculations
  const animationValues = useMemo(() => ({
    backdropFilter: visible ? "blur(10px)" : "blur(0px)",
    boxShadow: visible
      ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "0 0 0px rgba(34, 42, 53, 0)",
    width: visible ? "40%" : "100%",
    y: visible ? 20 : 0,
  }), [visible]);

  return (
    <motion.div
      animate={animationValues}
      transition={{
        type: "spring",
        stiffness: 300, // Increased for snappier response
        damping: 30,    // Reduced for less dampening
        mass: 0.8,      // Lighter feel
      }}
      style={{
        minWidth: "800px",
        // Use transform3d to enable hardware acceleration
        transform: "translate3d(0, 0, 0)",
        // Force layer creation for better performance
        willChange: "transform, backdrop-filter, box-shadow, width",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent",
        visible && "border-blue-700",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Optimize hover handlers with useCallback
  const handleMouseEnter = useCallback((idx: number) => {
    setHovered(idx);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(null);
  }, []);

  const handleClick = useCallback(() => {
    onItemClick?.();
  }, [onItemClick]);

  return (
    <motion.div
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-white transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => handleMouseEnter(idx)}
          onClick={handleClick}
          className="relative text-lg px-4 py-2 text-white hover:text-blue-950 transform transition-colors duration-150"
          key={`link-${idx}`}
          href={item.link}
          style={{
            // Enable hardware acceleration for individual items
            transform: "translate3d(0, 0, 0)",
            willChange: hovered === idx ? "transform" : "auto",
          }}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-blue-200"
              style={{
                // Optimize gradient rendering
                transform: "translate3d(0, 0, 0)",
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 25,
                mass: 0.5,
              }}
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  // Memoize mobile animation values
  const mobileAnimationValues = useMemo(() => ({
    backdropFilter: visible ? "blur(10px)" : "blur(0px)",
    boxShadow: visible
      ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
      : "0 0 0px rgba(34, 42, 53, 0)",
    width: visible ? "90%" : "100%",
    paddingRight: visible ? "12px" : "0px",
    paddingLeft: visible ? "12px" : "0px",
    borderRadius: visible ? "4px" : "2rem",
    y: visible ? 20 : 0,
  }), [visible]);

  return (
    <motion.div
      animate={mobileAnimationValues}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      }}
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform, backdrop-filter, box-shadow, width",
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            mass: 0.6,
          }}
          style={{
            transform: "translate3d(0, 0, 0)",
          }}
          className={cn(
            "absolute inset-x-0 top-8 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-blue-950 px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    >
      {isOpen ? (
        <IconX className="text-blue-950" />
      ) : (
        <IconMenu2 className="text-blue-500" />
      )}
    </motion.button>
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-xl font-normal text-black"
      style={{
        transform: "translate3d(0, 0, 0)",
      }}
    >
      <span className="relative font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200">
        Shaivi Jain
      </span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-md font-bold relative cursor-pointer transition duration-200 inline-block text-center";

  const variantStyles = {
    primary: "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-transparent shadow-none dark:text-white hover:-translate-y-0.5",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] hover:-translate-y-0.5",
    gradient: "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] hover:-translate-y-0.5",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      style={{
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
      {...props}
    >
      {children}
    </Tag>
  );
};