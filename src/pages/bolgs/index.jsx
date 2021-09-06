import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AllCategory from "../../api/manCategory"
import Card from "../../components/cards/home-page-card"


const Blogs = (props) => {

    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        let filterItems = null;

        if (props.match.params.subCategoryName === undefined) {
            filterItems = AllCategory.filter((item) => item.category === props.match.params.categoryName)
        } else if (props.match.params.subCategoryName !== undefined) {
            filterItems = AllCategory.filter((item) => item.subCategory === props.match.params.subCategoryName)
        }
        setBlogs(filterItems)

    }, [props.match.params])


    return (
        <section className="">
            <div className="container">
               <div className="py-4">
               {blogs &&
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                            {blogs[0].category && <li class="breadcrumb-item"><Link to={`/blogs/${blogs[0].category}`}>{blogs[0].category}</Link></li>}
                            {blogs[0].subCategory && <li class="breadcrumb-item active"aria-current="page">{blogs[0].subCategory}</li>}
                        </ol>
                    </nav>
                }
               </div>

                <div className="row">
                    <div className="col-12 col-lg-9">
                        <div className="row">
                            {blogs && blogs.map((item, index) => (
                                <div key={index} className={index < 2 ? `col-12 mb-4` : `col-12 col-md-6 mb-4`}>
                                    <Card item={item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blogs
