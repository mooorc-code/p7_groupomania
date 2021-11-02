const Post = require( '../models/Posts' );
const user = require( '../models/Users' );


exports.createPost = (req, res, next) => {
    const postObject = JSON.parse( req.body.post );
    delete postObject.user_id;
    const posts = new Post( {
        title: "",
        name: "",
    } );
    posts.save()
        .then( () => res.status( 201 ).json( {message: 'post créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

exports.listPost = (req, res, next) => {
    Post.findAll()
        .then( (post) => {
            res.status( 200 ).json( post );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );

};
exports.modifyPost = (req, res, next) => {

    Post.update( {_id: req.params.id}, {...postObject, _id: req.params.id} )
        .then( () => res.status( 200 ).json( {message: 'Post modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

exports.deletePost = (req, res) => {
    Post.findOne( {_id: req.params.id} )
        .then( post => {
            Post.delete( {_id: req.params.id} )
                .then( () => res.status( 200 ).json( {message: 'Post supprimée !'} ) )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};

