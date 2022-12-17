// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="list-container">
      <div className="item-container">
        <h1 className="heading">{title}</h1>
        <p className="date-text">{publishedDate}</p>
      </div>
      <p className="text">{description}</p>
    </li>
  )
}
export default BlogItem
