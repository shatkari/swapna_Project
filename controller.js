var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/contacts", {
        templateUrl : "Contacts.html",
		controller: "ContactsController"
    })
	.when("/index", {
        templateUrl : "index.html",
		controller: "maincontroller"
    })
	.when("/resources", {
        templateUrl : "Resources.html",
		controller: "resourcesController"
    })
	.when("/sbus", {
        templateUrl : "Resources.html",
		controller: "resourcesController"
    })
	.when("/accounts", {
        templateUrl : "Accounts.html",
		controller: "AccountsController"
    })
	.when("/home", {
        templateUrl : "home.html",
		controller: "homeController"
    })
	.otherwise({redirectTo:'/index'});
});
app.controller("mainController", function($scope){
console.log("main controller")
});

app.controller("homeController", function($scope){
console.log("hii");
});

app.controller("AccountsController", function($scope){
console.log("hii");
});
app.controller("resourcesController", function($scope){
console.log("hii");
});


app.controller("ContactsController", function($scope){
console.log("contacts");

$scope.SbuNames = ['Sreejith K','Manish','Tanmay','sampath','Jaya','Sandhya'];
$scope.finish = function(sbuName){
console.log($scope.sbuName);
console.log(sbuName);
}
console.log($scope.SbuNames);
});