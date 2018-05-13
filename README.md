# Learn React TDD
This code is produced as a practice applying [TDD][wiki-tdd] to [React][react].

The code is wrtten as I follow [React + TDD = 💖][med-react-tdd], a post by [ADDM][med-addm] on [Medium][med].

## Tools Used
* [Jest][jest]
* [React][react]
* [Create React App][gh-create-react-app]
* [Enzyme][enzyme] (and correct [adapter package][enzyme-pkgs])

## Breif Description
Following the [post][med-react-tdd] by [ADDM][med-addm], this is an online shoe store application. A user may view a list of products, add products to the shopping cart, view the items in the cart, and filter products listed by brand.

## Going Further
After completing all the user stories described in the post by ADDM, I decided to factor out state into a separate module. The tests I had written are doing a lot of unnecessary testing of React and a lot of view details which seems like a code smell to me.

Factoring out the state will allow unit testing to stay focused on the logic and not the implementation of React or details of the view.

<!-- links -->
[wiki-tdd]: https://en.wikipedia.org/wiki/Test-driven_development
[react]: https://reactjs.org/
[med-react-tdd]: https://medium.com/@admm/test-driven-development-in-react-is-easy-178c9c520f2f
[med-addm]: https://medium.com/@admm
[med]: https://medium.com/
[gh-create-react-app]: https://github.com/facebook/create-react-app
[jest]: https://facebook.github.io/jest/
[enzyme]: http://airbnb.io/enzyme/
[enzyme-pkgs]: https://github.com/airbnb/enzyme/tree/master/packages
