import React, { useEffect } from 'react'
import { DocSearch } from '@docsearch/react';
import '@docsearch/css'
import Styles from './index.module.scss'

const Index = () => {

  return (
    <div className={Styles.doc_search_box}>
      <DocSearch
        appId="TVAJ97SI13"
        indexName="blockless"
        apiKey="343ef034663c58773db97ab823982092"
      />
      {/* <DocSearch
        appId="TVAJ97SI13"
        indexName="blockless"
        apiKey="343ef034663c58773db97ab823982092"
        hitComponent={({ hit, children })=>{
          console.log(hit);
          return (
            <a href={hit.url}>1</a>
          )
        }}
      /> */}
    </div>
  )
}

export default Index