import React from "react";
import Navbar from "../nav/navbar";

class Search extends React.Component {
    constructor(props){
        super(props)


    }

    UNSAFE_componentWillMount() {
        this.props.fetchItems();
    }

    render() {
        
        return <div>
            <Navbar/>
            this is the test results
            <br />
            {this.props.keyword}
            <br />
            
        </div>;
    }
}

export default Search;