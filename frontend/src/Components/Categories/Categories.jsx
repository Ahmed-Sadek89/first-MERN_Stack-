import React from 'react'
import {categories} from '../../Assets/Data';

const Categories = () => {
  return (
    <div className='categories'>
        <div>
            <div className="categoriesContent">
                {categories.map(index => (
                    <div className='content' key={index.id}>
                        <div className="catImage">
                            <img src={index.img} alt={index.title} />
                        </div>
                        <div className="catInfo">
                            <h1>{index.title}</h1>
                            <button>
                                SHOP NOW
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Categories