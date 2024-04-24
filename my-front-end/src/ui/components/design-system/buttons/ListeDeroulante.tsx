import Link from 'next/link';
import React, { useState } from 'react';



const ListeDeroulante= () => {
 

  return (
    <div className="relative">
      <select
      >
        <option value="ete"> <Link href="/pageE">Été</Link></option>
        <option value="hiver">Hiver</option>
       
      </select>
     
    </div>
  );
};

export default ListeDeroulante;
