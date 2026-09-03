import React from 'react';
import { liquidStyles } from "./styles/styles";


function Footer() {
  return (
    <div className={`${liquidStyles.glowTextWhite} ${liquidStyles.footer}`}>Designed & Built by <span className="text-amber-300">Harry</span> • © 2026</div>
  )
}

export default Footer