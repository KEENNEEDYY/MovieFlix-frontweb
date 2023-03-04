import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.css'

const Pagination = () => {
    return(
            <ReactPaginate
                pageCount={4}
                pageRangeDisplayed={3}
                marginPagesDisplayed={1}
                containerClassName="pagination-container"
                pageLinkClassName="pagination-item"
                breakClassName="pagination-item"
                previousLabel={<div className="pagination-arrow-container"> <ArrowIcon /> </div>}
                nextLabel={<div className="pagination-arrow-container"> <ArrowIcon /> </div>}
                nextClassName="arrow-next"
                previousClassName="arrow-previous"
                activeLinkClassName="pagination-link-active"
                disabledClassName="arrow-inactive"
            />
    );
}

export default Pagination;