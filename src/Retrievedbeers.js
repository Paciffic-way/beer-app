import React, { Component } from "react";

class Retrievedbeers extends Component {
  
  



  handleScroll = () => this.props.scroll();
  componentDidMount(){
    this.handleScroll();
  }

  componentDidUpdate(){
    this.handleScroll();
  }
  render() {
    
    let dummy = this.props.meals;
    const noresult = this.props.meals === "nothing";

    

    return (
      <div>
        
       
        {noresult ? (
          //If nothing found
          <h5>Sorry, nothing found</h5>
        ) : (
          //else - generate scrollable flexcontainer with beers
          <div className="flex-container">
            {//Mapping beers to divs, with basic title, subtitle and image
            dummy.map((beer, index) => (
              <div className="beersugg" key={index}>
                 <div className="alcohol">{beer.abv}%</div>
                <div className="beerimg-container">
                                   <img
                    className="beerimg"
                    src={beer.image_url}
                    alt="meal-thumbnail"
                  />{" "}
                </div>
                <h3>{beer.name}</h3>
                <h4>Ingredients:</h4>
                <div className="ingredients-container">
                  

                  {//Mapping all the hops
                  beer.ingredients.hops.map((beer, index) => (
                    <p className="ingredients">{beer.name},</p>
                  ))}

                  {//Mapping the malt
                  beer.ingredients.malt.map((beer, index) => (
                    <p className="ingredients">{beer.name},</p>
                  ))}

                  {//Mapping all the yeasts
                    <p className="ingredients">{beer.ingredients.yeast}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        ) 
      
      
      }
      
      </div>
    );
  }
}

export default Retrievedbeers;
