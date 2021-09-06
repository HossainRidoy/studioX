import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import AllCategory from "../../api/manCategory"
import Card from "../../components/cards/home-page-popular-card"

const ManCategoryView = (props) => {

    const [singalItem, setSingalItem] = useState(null)
    const [relatedPost, setrelatedPost] = useState(AllCategory.filter((item, index) => index < 3))

    useEffect(() => {
        getItem(parseInt(props.match.params.id))
    }, [props.match.params.id])

    const getItem = (clickId) => {
        let filterItem = AllCategory.filter((item) => item.id === clickId)
        setSingalItem(filterItem[0])
    }


    return (
        <section>
            <div className="container">
                {singalItem && (
                    <div>
                        <div className="py-4">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/" className="">Home</Link></li>
                                    {singalItem.category && <li class="breadcrumb-item"><Link to={`/blogs/${singalItem.category}`}>{singalItem.category}</Link></li>}
                                    {singalItem.subCategory && <li class="breadcrumb-item"><Link to={`/blogs/${singalItem.category}/${singalItem.subCategory}`}>{singalItem.subCategory}</Link></li>}
                                    {singalItem.title && <li class="breadcrumb-item active" aria-current="page">{singalItem.title}</li>}
                                </ol>
                            </nav>
                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-9">
                                <div className="bg-white p-3 mb-4">
                                    <img className="img-fluid mb-4" src={singalItem.picture} alt="" />
                                    <div className="font-size-10 mb-3">
                                        <span className=" me-3">{singalItem.date}</span>
                                        <span className=" me-3">5 {singalItem.comment}</span>
                                        <span className=" me-3">20 {singalItem.like}</span>
                                    </div>
                                    <h4 className="mb-3">{singalItem.title}</h4>
                                    <div className="mb-3">
                                        <p className="font-size-20 font-weight-700">Grow it long</p>
                                        <p>
                                            ou may consider growing a longer beard instead of a short one, because that way you can know where the hair grows and where the patches are forming. As a result, fuller and longer hair can help cover patches. The first few weeks can be a little difficult when your patchy facial hair is uneven, but eventually it will grow even.
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="font-size-20 font-weight-700">Condition your beard</p>
                                        <p>
                                            Dry, wiry and poorly maintained facial hair can often cause a patchy beard to form. It is extremely important to use the right products and tools to condition your beard. This affects both the health and the appearance of the beard. A good beard oil or balm will help the growth of a healthy mane, while at the same time keeping it clean down to the follicles.
                                        </p>
                                    </div>
                                    <div className="mb-3">
                                        <p className="font-size-20 font-weight-700">Avoid Stress

                                        </p>
                                        <p>
                                            The beard, much like our mind and body is negatively affected by stress. Stress causes loss of hair and so creates bald patches in our facial hair. It also constricts blood vessels, making it hard for the nutrients to pass through to the follicles. Cutting down on stress improves beard growth. Our daily lives can be stressful and so you might want to practice mindfulness methods, exercise etc. as ways of stress release.

                                            All these steps will help you grow the beard of your dreams and make you a man from a boy in no time. So have patience and be consistent.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-white p-3 mb-4">
                                    <h5 className="text-uppercase mb-4">Related Post</h5>
                                    <div className="row">
                                        {relatedPost.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-6 col-lg-12">
                                                <Card item={item} />
                                            </div>
                                        ))}

                                    </div>

                                </div>
                                <div className="bg-white p-3 mb-4">
                                    <p className="mb-4">POST A COMMENT</p>
                                    <form action="">
                                        <textarea className="form-control mb-4" placeholder='message' name="" id="" cols="30" rows="5" />
                                        <div className="row mb-4">
                                            <div className="col-6 ">
                                                <input className="form-control" placeholder="Name*" type="text" />
                                            </div>
                                            <div className="col-6 ">
                                                <input className="form-control" placeholder="Email*" type="email" />
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <input className="" type="checkbox" />
                                            <label className="ms-2" htmlFor="">Save my name, email, and website in this browser for the next time I comment.</label>
                                        </div>
                                        <div className="text-end">
                                            <button className="btn btn-outline-dark text-uppercase px-4">Submit</button>
                                        </div>
                                    </form>

                                </div>

                            </div>
                            <div className="col-12 col-lg-3">
                                <div className="p-3 bg-white mb-4">
                                    <form action="">
                                        <label htmlFor="">Email</label>
                                        <input className="form-control mb-3 " type="email" />
                                        <button className="btn-dark form-control">Newsletter Subscribe</button>

                                    </form>
                                </div>
                                <div className="p-3 bg-white mb-4">
                                    <p className="font-weight-700 font-size-20 mb-3">RECENTLY VIEWED POST</p>
                                    <div className="row">
                                        {relatedPost.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-6 col-lg-12">
                                                <Card item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="p-3 bg-white mb-4">
                                    <p className="font-weight-700 font-size-20 mb-3">POPULAR POST</p>
                                    <div className="row">
                                        {relatedPost.map((item, index) => (
                                            <div key={index} className="col-12 col-sm-6 col-lg-12">
                                                <Card item={item} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}

export default ManCategoryView
