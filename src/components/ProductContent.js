import React, { Component } from 'react';

import url from 'url';

class ProductContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    componentDidMount(){
        console.log(url.parse(this.props.location.search,true));
        var query=url.parse(this.props.location.search,true).query;
        console.log(query)
    }
    

    render() {
        return (
            <div>

                我是商品详情组件
            </div>
        );
    }
}

export default ProductContent;