function main($scope, $http) {
    // when landing on the page, get all todos and show them
    var refresh = function () {
        $http.get('/api/contact')
               .success(function (data) {
                   $scope.contacts = data;
               })
               .error(function (data) {
                   console.log('Error: ' + data);
               });
    }
    refresh();


    $scope.addContact = function () {
        $http.post('/api/contact', $scope.contact)
            .success(function (response) {
                $scope.contact = '';
            refresh();
            })
        .error(function (response) {
            console.log(response);
        });
    };
    



    $scope.removeConact = function (id) {
        $http.delete('/api/contact/' + id)
            .success(function (response) {
                refresh();
            })
        .error(function (response) {
            console.log(response);
        });
    };

    $scope.edit = function (id) {
        $http.get('/api/contact/'+id)
               .success(function (data) {
                   $scope.contact = data;
               })
               .error(function (data) {
                   console.log('Error: ' + data);
               });

    }

    

    $scope.update = function (id) {
        $http.put('/api/contact/'+id, $scope.contact)
            .success(function (response) {
                $scope.contact = '';
                refresh();
            })
        .error(function (response) {
            console.log(response);
        });
    };






























}