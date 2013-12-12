if (Meteor.isClient) {
  $(document).ready(function () {
        // Enable FastClick
        if(typeof FastClick !== 'undefined') {
            FastClick.attach(document.body);
        }
        setTimeout(function(){
            $(document).foundation(function (response) {
                console.log(response.errors);
            }
        )}, 0)
    });
}