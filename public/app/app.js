function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    //need to send id token to database
    let id_token = googleUser.getAuthResponse().id_token;
}

// console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
// console.log('Name: ' + profile.getName());
// console.log('Image URL: ' + profile.getImageUrl());
// console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

