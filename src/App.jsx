import React, { useState } from 'react'
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';
import { Hero } from './Components/Hero/Hero'

export const App = () => {
  let heroData = [
    { text1: "Indulge in", text2: "pure happiness" },
    { text1: "Drive Green", text2: "Stay clean" },
    { text1: "Experience the", text2: "true luxury" },
  ]
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlaystatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar setHeroCount={setHeroCount} setPlaystatus={setPlaystatus} ></Navbar>
      <Hero
        setPlaystatus={setPlaystatus}
        setHeroCount={setHeroCount}
        heroCount={heroCount}
        playStatus={playStatus}
        heroData={heroData[heroCount]}

      />

    </div>

  )
}
