app.service('angularService', function ($http) {

    this.saveEmployee = function (model) {
        var response = $http({
            method: "post",
            url: "/home/SaveEmployee",
            data: JSON.stringify(model),
            dataType: "json"
        });

        return response;
    }

    this.getemp = function () {
        return $http.get("/home/GetEmployeeList");
    }

    this.delEmp = function (id) {
        return $http.get("/home/DelEmp", { params: {id:id}});
    }
});