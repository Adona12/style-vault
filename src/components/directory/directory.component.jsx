import React from 'react'
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss'
function Directory({ categories }) {
    return (<div className="categories-container">
        {categories.map((category) => {
            return (
                <CategoryItem key={category.id} category={category} />
            );
        })}
    </div>)
}
export default Directory;