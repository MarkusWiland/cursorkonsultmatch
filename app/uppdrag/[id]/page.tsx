import React from 'react'

export default function UppdragPage({params}: {params: {id: string}}) {
  const {id} = params;
  return (
    <section className='py-20'>
      <div className="container">
        <h1>Uppdrag {id}</h1>
      </div>
    </section>
  )
}
