import React, {Component} from 'react';
import './style.scss';


function searchingFor(term){
    return function(x){
        return x.general.firstName.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}

class ClientsList extends Component{
        constructor(props){
            super(props);

            this.state ={
                people: this.props.items,
                term: ''
            };

            this.searchHandler = this.searchHandler.bind(this);
        }

        searchHandler(event){
            this.setState({
                term: event.target.value
            })
        }

    render(){
        const {term, people} = this.state;
        return(
            <div className="list">
                <div className="list-left">
                    <input
                        type="text"
                        className="list-input"
                        onChange={this.searchHandler}
                        value={term}
                    />
                    {
                        people.filter(searchingFor(term)).map((item, index) => {
                            return <div
                                key={index}
                                className="list-item"
                            >
                                <div className="list-wrapimg">
                                    <img src={item.general.avatar}
                                         className="list-img"
                                         alt="avatar"/>
                                </div>
                                <div className="list-container">
                                    <p className="list-name">name: {item.general.firstName}</p>
                                    <p className="list-name">job: {item.job.title}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className="list-right" >
                    111
                </div>

            </div>
        );
    }
}
export default ClientsList;