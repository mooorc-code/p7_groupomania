const Comment = require( '../models/Comments' );

exports.createComment = () => {
    const commentObject = JSON.parse( req.body.post );
    delete commentObject.user_id;
    const comments = new Comment( {
        title: "",
        name: "",
    } );
    comments.save()
        .then( () => res.status( 201 ).json( {message: 'Commentaire créé !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );

};

exports.listComment = (req, res, next) => {
    Comment.findAll()
        .then( (post) => {
            res.status( 200 ).json( comment );
        } )
        .catch( error => res.status( 400 ).json( {error} ) );

};
exports.modifyComment = (req, res, next) => {
    const commentObject = req.file ?
        {
            ...JSON.parse( req.body.post ),
        } : {...req.body};

    Comment.update( {_id: req.params.id}, {...commentObject, _id: req.params.id} )
        .then( () => res.status( 200 ).json( {message: 'Commentaire modifiée !'} ) )
        .catch( error => res.status( 400 ).json( {error} ) );
};

exports.deleteComment = (req, res, next) => {
    Comment.findOne( {_id: req.params.id} )
        .then( comment => {
            comment.delete( {_id: req.params.id} )
                .then( () => res.status( 200 ).json( {message: 'Commentaire supprimée !'} ) )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};

