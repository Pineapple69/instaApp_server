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
            tag: "pigs",
            comments: [{
                        id: 0,
                        user: {
                            id: 1,
                            username: "JohnCat",
                            profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
                        },
                        text: "hahahaha",
                        userRefs: [],
                        tag: "hahah"
                    }
            ]

        },
				{
		            id: 1,
		            user: {
		                id: 2,
		                username: "superuser",
		                profileImageSmall: ""
		            },
		            image: "http://images.fastcompany.com/upload/adidas-jabulani-ball.jpg",
		            imageThumbnail: "https://images-na.ssl-images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
		            likes: 892,
					userLike: false,
		            caption: "awesome ball!",
		            tag: "ball",
		            comments: [{
		                        id: 1,
		                        user: {
		                            id: 1,
		                            username: "JohnCat",
		                            profileImageSmall: "http://bywilma.com/wp-content/uploads/2012/03/Cat-John.jpg"
		                        },
		                        text: "Awesome ball!",
		                        userRefs: [],
		                        tag: "happy"
		                    }
		            ]

		        }
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
