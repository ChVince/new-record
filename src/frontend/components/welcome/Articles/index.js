import React from 'react';
import {Pagination} from 'react-bootstrap'
import Article from './Article'

import Notification from '../../common/Notification'
require('../../../styles/articles.less');


class Articles extends React.Component {

    constructor(props) {
        super(props);
        /*this.props.getArticles = this.props.getArticles.bind(this);*/
    }

    componentDidMount() {
        this.props.getArticlesPageNum();
        this.props.getArticles(this.props.pageNum);
    }

    handleSelect = (eventKey) => {
        this.props.getArticles(eventKey);
    };

    render() {
        let listArticles;

        if (this.props.articles && this.props.articles.length > 0) {
            listArticles = this.props.articles.map((article, index) => {
                return (
                    <Article key={index} article={article}/>
                )
            });
        }
        return (
            <section className="container-fluid grid thumbs-masonry">
                <div className="row">
                    {
                        listArticles
                    }
                </div>
                <div className="pagination-wrapper">
                    <div>
                        <Pagination bsSize="medium"
                                    items={this.props.pageNum}
                                    activePage={this.props.page}
                                    onSelect={this.handleSelect}/>
                    </div>
                </div>
                <Notification notification={this.props.notification}/>
            </section>

        )
    }
}


Articles.propTypes = {
    page: React.PropTypes.number.isRequired,
    articles: React.PropTypes.array.isRequired,
    articlesSpinner: React.PropTypes.bool.isRequired,
    getArticles: React.PropTypes.func.isRequired,
    pageNum: React.PropTypes.number.isRequired,
    notification: React.PropTypes.object.isRequired
};

export default  Articles;


