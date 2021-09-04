import React from 'react'
import './style.css'
import Tier from './Tier'

const cardArray = [
    {
        h5: "Free",
        cardprice: "/month",
        price: "$0",
        list1: "Single User",
        list2: "5GB Storage",
        list3: "Unlimited Public Projects",
        list4: "Community Access ",
        list5: "Unlimited Private Projects",
        list6: "Dedicated Phone Support",
        list7: "Free Subdomain",
        list8: "Monthly Status Reports"
    },
    {
        h5: "Publice",
        cardprice: "/month",
        price: "$9",
        list1: "5 Users",
        list2: "50GB Storage",
        list3: "Unlimited Public Projects",
        list4: "Community Access ",
        list5: "Unlimited Private Projects",
        list6: "Dedicated Phone Support",
        list7: "Free Subdomain",
        list8: "Monthly Status Reports"
    },
    {
        h5: "PRO",
        cardprice: "/month",
        price: "$49",
        list1: "Unlimited Users",
        list2: "150GB Storage",
        list3: "Unlimited Public Projects",
        list4: " Community Access",
        list5: "Unlimited Private Projects",
        list6: "Dedicated Phone Support",
        list7: "Unlimited Free Subdomains",
        list8: "Monthly Status Reports"
    }
]

function Card() {
    return (
        <>
            <section className="pricing py-5">
                <div className="container">
                    <div className="row">
                        {/* <!--  Tier list --> */}
                        {
                            cardArray.map((item, key) => {
                                return (
                                    <div className="col-lg-4" key={key}>
                                        <Tier h5={item.head}
                                            cardprice={item.cardprice}
                                            price={item.price}
                                            list1={item.list1}
                                            list2={item.list2}
                                            list3={item.list3}
                                            list4={item.list4}
                                            list5={item.list5}
                                            list6={item.list6}
                                            list7={item.list7}
                                            list8={item.list8}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Card
