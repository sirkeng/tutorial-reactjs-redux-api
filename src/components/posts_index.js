import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
// console.log(fetchPosts);

class PostsIndex extends Component {
	componentDidMount() {
		// console.log(this.props.fetchPosts());
		this.props.fetchPosts();
	}

	renderPosts() {
		// //const keyMap = _.map(this.props.posts);
		// //console.log(keyMap);
		// return _.map(this.props.posts, post => {
		// 	console.log(post[1]);
		// 	return (
		// 		<li className="list-group-item" key={post.id}>
		// 			{post.title}
		// 		</li>
		// 	)
		// });
		

		// const post = this.props.posts;
		// console.log(post);
		// return (
		// 	<li className="list-group-item" key={post.id}>
		// 		{post.title}
		// 	</li>
		// )
		const posts = this.props.posts;
		//console.log(typeof(posts).length);
		// console.log(typeof(posts.title));
		if(typeof(posts).length !== 'number') {
			//console.log('empty');
			return false;
		}

		//console.log(this.props.posts);
		return posts.map((post) => {
			// console.log('fully');
			// console.log(post);
			// console.log(post.title);
			if(post.title === null){
				return false;
			}


			
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={`/posts/${post.id}`}>
						{post.title}
					</Link>
				</li>
			)
		});
	}

	render() {
		// console.log(this.props.posts);
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						Add a Post
					</Link>
				</div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}


function mapStateToProps(state) {
	// console.log(state);
	return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);