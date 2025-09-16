import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { TailSpin } from 'react-loader-spinner';

function DataLoader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '100px'
      }}
    >
      <TailSpin
        height={80}
        width={80}
        color='#4fa94d'
        ariaLabel='tail-spin-loading'
        radius='1'
        visible
      />
    </div>
  );
}

export default DataLoader;
