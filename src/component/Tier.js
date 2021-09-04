import React from 'react'

const Tier = ({ head, price, cardprice, list1, list2, list3, list4, list5, list6, list7, list8 }) => {
    return (
        <>
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{head}</h5>
                    <h6 className="card-price text-center">{price}<span className="period">{cardprice}</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{list1}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{list2}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{list3}</li>
                        <li><span className="fa-li"><i className="fas fa-check"></i></span>{list4}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{list5}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{list6}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{list7}</li>
                        <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{list8}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tier
