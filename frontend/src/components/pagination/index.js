import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class Pagination extends Component {
	constructor(props) {
		super(props);
	}

	listPages(totalPages) {
		let pages = Array.from(new Array(totalPages), (val, index) => index + 1);
		return pages.map((page, key) => {
			let classForActived = '';
			if (page === this.props.currentPage)
				classForActived = 'active';
			return (
				<li className={'page-item ' + classForActived} key={key}>
					<Link className='page-link'
					      to={{search: `?page=${page}`}}
					      onClick={(event) => {this.handleClickPage(page)}}>{page}</Link>
				</li>
			)
		})
	}

	handleClickPage = (page) => {
		this.props.fetchCars({
      [this.props.field]: this.props.value,
      size: this.props.size,
      page: page
    });
	};

	render() {
		let pages = this.props.totalPages ? this.listPages(this.props.totalPages) : null;
		return (
			<nav>
				<ul className="pagination">
					<li className="page-item">
						<Link className="page-link"
						   to={{search: '?page=1'}}
						   onClick={(event) => {this.handleClickPage(1)}}
						   aria-label="Previous">
							<span aria-hidden="true">&laquo;</span>
							<span className="sr-only">Previous</span>
						</Link>
					</li>
					{pages}
					<li className="page-item">
						<Link className="page-link"
						   to={{search: `?page=${this.props.totalPages}`}}
						   onClick={(event) => {this.handleClickPage(this.props.totalPages)}}
						   aria-label="Next">
							<span aria-hidden="true">&raquo;</span>
							<span className="sr-only">Next</span>
						</Link>
					</li>
				</ul>
			</nav>
		)
	}
};
