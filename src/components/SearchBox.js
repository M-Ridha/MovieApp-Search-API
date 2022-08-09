import React from 'react'

function SearchBox({search,setSearch}) {
  return (
    <div className='col col-sm-4'>
        <input className='form-control' placeholder='Search Movie' value={search} onChange={(e)=>setSearch(e.target.value) } ></input>
    </div>
  )
}

export default SearchBox