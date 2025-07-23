import * as React from "react"
import { cn } from "@/lib/utils"

const getButtonClasses = (variant = "default", size = "default") => {
  const baseClasses = "inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md"
  
  const variants = {
    default: "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:scale-105",
    destructive: "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 hover:scale-105",
    outline: "border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 hover:scale-105",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105",
    ghost: "hover:bg-gray-100 hover:text-gray-900 shadow-none hover:shadow-sm",
    link: "text-gray-900 underline-offset-4 hover:underline shadow-none hover:shadow-none",
  }
  
  const sizes = {
    default: "h-11 px-6 py-2",
    sm: "h-9 px-4 text-sm",
    lg: "h-12 px-8 text-base",
    icon: "h-11 w-11",
  }
  
  return `${baseClasses} ${variants[variant]} ${sizes[size]}`
}

const Button = React.forwardRef(({ className, variant, size, asChild = false, children, ...props }, ref) => {
  const classes = cn(getButtonClasses(variant, size), className)
  
  if (asChild) {
    return React.cloneElement(children, {
      ...props,
      className: classes,
      ref
    })
  }
  
  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }