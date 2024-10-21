import React, { useState } from 'react'
import { Background } from './Components/Background/Background';
import { Navbar } from './Components/Navbar/Navbar';

export const App = () => {
  let heroData = [
    { text1: "", text2: "" },
    { text1: "", text2: "" },
    { text1: "", text2: "" },
  ]
  const [heroCount, setHeroCount] = useState(1);
  const [playStatus, setPlaystatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar></Navbar>
    </div>

  )
}
