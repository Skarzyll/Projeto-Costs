'use client'

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PathData from "@/components/PatchData";

export default function ProjectId() {

    return (
        <div className="h-screen w-screen">
            <Header />
            <div className="min-h-min-70 p-2">
                <PathData />
            </div>
            <Footer />
        </div>
    )
}