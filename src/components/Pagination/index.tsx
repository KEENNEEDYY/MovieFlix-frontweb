import { ReactComponent as ArrowIcon } from 'assets/images/arrow.svg';
import ReactPaginate from 'react-paginate';
import './styles.css'

type Props = {
    pageCount: number;
    range: number;
    forcePage?: number;
    onChange?: (pageNumber: number) => void;
}

const Pagination = ( {forcePage, pageCount, range, onChange} : Props ) => {
    return(
            <ReactPaginate
                forcePage={forcePage}
                pageCount={pageCount}
                pageRangeDisplayed={range}
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
                onPageChange={ (items) => (onChange) ? onChange(items.selected) : {} }
            />
    );
}

export default Pagination;