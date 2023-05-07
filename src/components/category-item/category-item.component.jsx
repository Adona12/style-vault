import React from 'react'
import './category-item.styles.scss'
function CategoryItem({category}) {
    return (
        <div className="category-container">
            <div
                className="background-image"
                style={{ backgroundImage: `url(${category.imageUrl})` }}
            />
            <div className="category-body-container">
                <h1> {category.title} </h1>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
export default CategoryItem;