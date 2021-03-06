import React, { Component } from 'react';
import Header from './Header';

class FavoritesGrid extends Component {
  renderRecipes(recipes) {
    if (recipes.length <= 0) {
      return (
        <div className="container">
          <div className="row">
            <div className="col s12 m12 l12 ">
              <h5 className="center-align"><em>Your list of favorites is empty</em></h5>
            </div>
          </div>
        </div>
      );
    }
    return recipes.map(recipe => (
      <div key={recipe.Recipe.id} className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img name={recipe.Recipe.id} onClick={this.onHandleClick} src="http://res.cloudinary.com/myresources/image/upload/v1515852046/bg2_pj1yit.jpg" alt="props-img" />
            <span className="card-title">
              <b>{recipe.Recipe.title}</b>
            </span>
            <a className="btn-floating halfway-fab waves-effect waves-light white "><i className="material-icons red-text">delete_forever</i></a>
          </div>
          <div className="card-content">
            <p>{recipe.Recipe.description}</p>
          </div>
          <div className="card-action">
            <div className="row">
              <div className="col s12 m12">
                <div className="chip"><img src="http://res.cloudinary.com/myresources/image/upload/v1515852440/avi_so66tc.jpg" alt="Contact Person" />{recipe.Recipe.User.username}</div>
              </div>
              <div className="col s12 m12">
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="upvote"><i className="material-icons left">thumb_up</i>{recipe.Recipe.upvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100" data-tooltip="downvote"><i className="material-icons left">thumb_down</i>{recipe.Recipe.downvotes}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="views"><i className="material-icons left">visibility</i>{recipe.Recipe.views}</a>
                <a className="waves-effect waves-light tooltipped" data-position="bottom" data-delay="100 " data-tooltip="reviews"><i className="material-icons left">chat</i>0</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    const { recipes } = this.props;


    return (
      <div className='container'>
        <div className='row'>
          {this.renderRecipes(recipes)}
        </div>
      </div>
    );
  }
}

export default FavoritesGrid;
