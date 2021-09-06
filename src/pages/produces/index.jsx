import React, { useState } from 'react'
import ScssStyle from "./products.module.scss";
import ProductsItems from "../../api/productsItems"



const Products = () => {


    const [maincategoryId, setmaincategoryId] = useState(null)
    const [clickReletedId, setClickReletedId] = useState(null)

    const clickItem = ((clickId, mainId) => {
        setmaincategoryId(mainId)
        setClickReletedId(clickId)

    })

    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    {ProductsItems.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 bg-white mb-4 p-3">
                            <div>
                                {maincategoryId === item.id ? (item.reletedItems.filter((reItem) => reItem.id === clickReletedId).map((clickItem) => (
                                    <div className="row align-items-center mb-4">
                                        <div className="col-6">
                                            <img className="img-fluid" src={clickItem.picture} alt="" />
                                        </div>
                                        <div className="col-6">
                                            <h3 className="mb-3">{clickItem.title}</h3>
                                            <div className="font-size-16 mb-3">{clickItem.subTitle}</div>
                                            <div className="font-size-16"><strong className="text-uppercase">Net Weight</strong> <span className="">{clickItem.weight}ml</span></div>
                                            <div className="font-size-16 mb-2"><strong className="text-uppercase">Price <span className="text-primary">Bdt</span></strong > <span className="text-uppercase">{clickItem.price}</span></div>
                                            <div className="font-size-16 text-uppercase">{clickItem.buyForm}</div>
                                            <a className="" href="">
                                                <img className='img-fluid  mt-3' src={clickItem.buyForm} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                ))) : (<div className="row align-items-center mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid" src={item.picture} alt="" />
                                    </div>
                                    <div className="col-6">
                                        <h3 className="mb-3">{item.title}</h3>
                                        <div className="font-size-16 mb-3">{item.subTitle}</div>
                                        <div className="font-size-16"><strong className="text-uppercase">Net Weight</strong> <span className="">{item.weight}ml</span></div>
                                        <div className="font-size-16 mb-2"><strong className="text-uppercase">Price <span className="text-primary">Bdt</span></strong > <span className="text-uppercase">{item.price}</span></div>
                                        <div className="font-size-16 text-uppercase">{item.buyForm}</div>
                                        <a className="" href="">
                                            <img className='img-fluid  mt-3' src={item.buyForm} alt="" />
                                        </a>
                                    </div>
                                </div>)}

                                <div className=" bg-light d-flex flex-wrap">
                                    {item.reletedItems && item.reletedItems.length > 0 && item.reletedItems.map((ritem, index) => (
                                        <div key={index} onClick={() => { clickItem(ritem.id, item.id) }} className="d-flexd p-2 mx-1">
                                            <img style={{ width: "80px" }} className="img-fluid" src={ritem.picture} alt="" />
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    )
}

export default Products
