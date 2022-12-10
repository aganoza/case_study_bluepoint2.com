import clsx from "classnames";
import { twMerge } from "tailwind-merge";

const variants = {
  primary: "bg-primary hover:bg-secondary",
  secondary: "bg-secondary hover:bg-secondary-dark",
};

function Button({ variant = "primary", className = "", children, ...rest }) {
  return (
    <button
      type="button"
      className={twMerge(
        clsx(
          variants[variant],
          "text-white max-h-full inline font-normal min-w-14 m-0 px-7 py-2 rounded-3xl border-2",
          className
        )
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
