# OAuth Comparative Analysis

## OAuth Provider - Yahoo!

### Research Conducted By: Marlene Rinker, Ashley Biermann (Dave Wolfe joined us for a little bit)

### Overall Score and Comments
#### Score (Out of 10): 9
#### General Comments
This seems like it would be a cool oauth service to use, but we weren't able to implement it because it required an https route for redirect URI. (We looked into LinkedIn, Apple, Google, and Amazon as well and they had some blockers.)

Ashley and I created a yahoo.js file and wrote the code as if we had an https redirect URI. We hooked everything up and we get to the Yahoo! page with an error that something went wrong. We considered that a success given our limitations. We tried to make our localhost work as an HTTPS route, but got a message that the site can't provide a secure connection when going to the route. [This is what we tried](https://www.thepolyglotdeveloper.com/2018/11/create-self-signed-certificate-nodejs-macos/)

We at least had the experience of getting oauth set up and I feel like it would work if we could get past the https issue.

It seems like the hardest part is getting started/set up to use oauth.

#### Pros
* Good documentation
* Well-known

#### Cons
* It was a con for our lab that we had to have to have a secure https: route for the redirect URI

### Ratings and Reviews
#### Documentation
It was easy to find and navigate the documentation. Has a great image of the flow and almost all the info you need on one page.

#### Systems Requirements
I didn't anything in the developer docs that talked about this. You do need a https route for the redirect URI, which is required.

#### Ramp-Up Projections
It seems like it wouldn't take too long if they have an HTTPS route for the redirect URI. It seems reasonable that they could have it up and running in a day. 

#### Community Support and Adoption levels
I didn't see much in the community forums that was recent. I get the idea that more companies are using other options like Google and Facebook.


### Links and Resources
<!-- * [framework](http://xyz.com) -->
* [docs](https://developer.yahoo.com/oauth2/guide/)
* [examples/tutorials](https://developer.yahoo.com/oauth2/guide/flows_authcode/)

### Code Demos
<!-- * [live/running application](http://xyz.com) -->
* [code repository](https://github.com/marlenerinker-401-advanced-javascript/oauth-lab)

### Operating Instructions
If someone were to download your repo (above), what steps do they need to take to run the application
* `npm start`
* Endpoint: `/`
  * Takes you to a page with a login link

