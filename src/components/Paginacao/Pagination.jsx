
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (event, pageNumber) => {
        event.preventDefault()
        paginate(pageNumber)
    }

    return (
        <div>
            <nav>
                <ul className='pagination'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <a href='!#' className='page-link' onClick={(event) => handleClick(event, number)}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
