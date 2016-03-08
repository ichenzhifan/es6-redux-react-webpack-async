import React, {Component, PropTypes} from 'react';

export default class Posts extends Component{
	render(){
		let _posts=[];		
		this.props.posts.forEach((post, i)=>{
			_posts.push(<li key={i}>{post.title}</li>);
		});
		return (
			<ul>
				{_posts}
			</ul>
		);
	}
}

Posts.propTypes = {
	posts: PropTypes.arrayOf(PropTypes.shape({
		title: PropTypes.string.isRequired
	}).isRequired).isRequired
};