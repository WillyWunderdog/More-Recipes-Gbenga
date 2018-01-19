import React, { Component } from 'react';
import Paginate from './Pagination';
import Recipe from '../containers/RecipeContainer';

class RecipeGrid extends Component {
  renderRecipes(recipes) {
    if (!recipes || recipes.length <= 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m6 l4 ">
              <h5 className="center-align"><em>No recipes found</em></h5>
            </div>
          </div>
        </div>
      );
    }
    return recipes.map((recipe, index) => (
      <Recipe
        recipe={ recipe }
        key={ index }
        index={ index }
        downvoteRecipe={ this.props.downvoteRecipe }
        upvoteRecipe={ this.props.upvoteRecipe }
        deleteSingleRecipe={ this.props.deleteSingleRecipe }
        editRecipe={ this.props.editRecipe }/>
    ));
  };

  renderPaginationGrid(pages) {
    return (
      <div className='col s12 m12 l4 center-align offset-l4'>
        <Paginate
          id='paginate'
          handlePaginateClick={this.props.onPaginationClick}
          pageNumber={pages}
          currentPage={this.props.currentPage}
        />
      </div>
    );
  };

  render() {
    const { recipes, pages } = this.props;
    /*
    if (loading) {
      return (
      <div>
        <h1>Recipes</h1>
        <h3>loading...</h3>
      </div>
      )
    }
    if (error) {
      return <div> { error }</div>
    }
*/
    return (
      <div className=''>
        <div className='row'>
          {this.renderRecipes(recipes)}
        </div>
        <div className='row'>
          {this.renderPaginationGrid(pages)}
        </div>
      </div>
    );
  }
}

export default RecipeGrid;