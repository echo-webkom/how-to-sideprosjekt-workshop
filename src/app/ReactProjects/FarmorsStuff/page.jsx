"use client"

import { useState } from "react"
import IntroText from "./IntroText"

import Footer from "../../FrontPage/Footer"
import Banner from "../../FrontPage/Banner"
import NavBar from "@/app/FrontPage/NavBar"

export default function FarmorsStuff() {
    return(
        <div className = "page">
            <NavBar />
            <Banner message = "Farmors Stuff" />
            <IntroText />
                
            <Footer />
        </div>
    )
}