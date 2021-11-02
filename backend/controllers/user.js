const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const User = require( '../models/Users' );
const passwordValidator = require( 'password-validator' );
const schema = new passwordValidator();

schema
    .is().min( 8 )
    .is().max( 100 )
    .has().uppercase()
    .has().lowercase()
console.log( schema.validate( 'validPASS123' ) );


exports.signup = (req, res, next) => {
    console.log("error");
    res.status(200).json( {message:"toto"})
    bcrypt.hash( req.body.password, 10 )
        .then( hash => {
            const user = new User( {
                email: req.body.email,
                nom: req.body.nom,
                prenom: req.body.prenom,
                poste: req.body.poste,
                password: hash,
            } );
            user.save()
                .then( () => res.status( 201 ).json( {message: 'utilisateur créé !'} ) )
                .catch( error => res.status( 400 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};

exports.login = (req, res, next) => {
    User.findOne( {email: req.body.email} )
        .then( user => {
            if (!user) {
                return res.status( 401 ).json( {error: 'utilisateur non trouvé !'} );
            }
            bcrypt.compare( req.body.password, user.password )
                .then( valid => {
                    if (!valid) {
                        return res.status( 401 ).json( {error: 'mot de passe incorrect !'} );
                    }
                    res.status( 200 ).json( {
                        userId: user,
                        token: jwt.sign(
                            {userId: user},
                            'RANDOM_SECRET_KEY',
                            {expiresIn: '24h'}
                        )
                    } );
                } )
                .catch( error => res.status( 500 ).json( {error} ) );
        } )
        .catch( error => res.status( 500 ).json( {error} ) );
};
