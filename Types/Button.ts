import React from "react"

export type ButtonType = {
    className?: string
    onClick?: () => void
    children: string | React.ReactNode
}