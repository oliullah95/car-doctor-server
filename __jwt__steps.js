/*** 
 * install jsonwebtoken
 * jwt.sign (payload, secret, {expires:})
 * token client
 * 
 * 
*/


/***
 * how to store token in the client side
 * memory ---> ok type
 * local storage -- ok type (XSS)
 * cookies: http only 
 **/

/***
 * set cookies with http only. for development secure: false,
 * 
 * corse 
 * app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}));

 * client side axios setting 
 * */

