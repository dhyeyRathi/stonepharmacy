import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <div className="max-w-[1098px] pt-20 sm:pt-[50px] lg:pt-35 px-4 sm:px-6 xl:px-0 self-center w-full">
                {children}
            </div>
            <Footer />
        </>

    )
}

