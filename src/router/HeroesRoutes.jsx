import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { DCPage } from '../heroes/pages/DCPage'
import { HeroPage } from '../heroes/pages/HeroPage'
import { MarvelPage } from '../heroes/pages/MarvelPage'
import { SearchPage } from '../heroes/pages/SearchPage'
import { Navbar } from '../ui'

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DCPage />} />
                <Route path="search" element={<SearchPage />} />
                <Route path="hero" element={<HeroPage />} />

                <Route path="/" element={<Navigate to="/marvel" />} />
            </Routes>
        </div>

    </>
  )
}
