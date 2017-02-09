var posts = [
		{
            id: 0,
            user: {
                id: 1,
                username: "harryp",
                profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
            },
            image: "https://s-media-cache-ak0.pinimg.com/originals/5f/4e/b6/5f4eb67439ab51ed271c7b06c5c8b4ef.jpg",
            imageThumbnail: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg",
            likes: 892,
			userLike: false,
            caption: "pigs!",
            tags: ['elections'],
            comments: [{
                        id: 0,
                        user: {
                            id: 1,
                            username: "JohnCat",
                            profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
                        },
                        text: "hahahaha",
                        userRefs: [],
                        tags: []
                    }
            ]

        },
				{
								id: 0,
								user: {
										id: 1,
										username: "harryp",
										profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
								},
								image: "https://s-media-cache-ak0.pinimg.com/originals/5f/4e/b6/5f4eb67439ab51ed271c7b06c5c8b4ef.jpg",
								imageThumbnail: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg",
								likes: 892,
					userLike: false,
								caption: "pigs!",
								tags: ['elections'],
								comments: [{
														id: 0,
														user: {
																id: 1,
																username: "JohnCat",
																profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
														},
														text: "hahahaha",
														userRefs: [],
														tags: []
												}
								]

						},
			]


exports.getAllPosts = function(){
    return posts;
}

exports.addnewPosts = function(newPost){
    posts.unshift(newPost);
}

exports.Postdislike = function(id, dislike){
    return posts.filter(function(post){
        if(post.id == id)
        {
			post.userLike = dislike;
			post.likes = post.likes - 1;
        }
    });
}

exports.Postlike = function(id, like){
    return posts.filter(function(post){
        if(post.id == id)
        {
			post.userLike = like;
			post.likes = post.likes + 1;
        }
    });
}

exports.addcomment = function(id, newcomment){
    console.log(id, newcomment );
	return posts.filter(function(post){
        if(post.id == id)
        {
			post.comments.push(newcomment);
        }
    });
}
