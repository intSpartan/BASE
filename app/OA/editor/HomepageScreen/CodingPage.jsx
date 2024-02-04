import React from 'react'
// import ImageCoding from '../../assets/JavaScript frameworks-rafiki.svg'
import Link from 'next/link'

function CodingPage(props) { 
  return (
    <>
        <div className="codingContainer container"> 
            <h1 className='title'>{props.title}</h1>
            <div className="codingSection" id={props.uniId}
            //  style={props.poss}
            >
                <div className="codingInfo codingsec">

                    <Link href={`editor/${props.path}`}><button className="btn">{props.con}</button></Link>
                </div>
                <div className="codingimage codingsec">
                    <img
                    src={props.image}
                     alt="image1" className='CodingImg' />
                </div>
            </div>
        </div>
    </>
  )
}

export default CodingPage
