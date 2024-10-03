app.controller('emp', function ($scope, angularService) {
    $scope.btnName = "Submit";
    $scope.saveEmployee = function () {

        var obj = {
            EmployeeId: $scope.EmployeeId,
            Name: $scope.name,
            Mobile: $scope.mobile,
            Email: $scope.email,
            Address: $scope.address
        }
        console.log(obj);
        angularService.saveEmployee(obj).then(function (res) {

            if (res.data.Message == "Success") {
                alert("Success")
                $scope.clearForm();
            } else {
                alert("Not Submit")
            }

        });

    }
    $scope.clearForm = function () {
        $scope.GetEmpList();
        $scope.EmployeeId = 0;
        $scope.name = "";
        $scope.mobile = "";
        $scope.email = "";
        $scope.address = "";

        $scope.btnName = "Submit";
    }

    $scope.GetEmpList = function () {

        angularService.getemp().then(function (res) {


            if (res.data.Message == "Success") {
                console.log(res.data.EmployeeList)
                $scope.empList = res.data.EmployeeList;
            } else {
                alert("Error while getting data")
            }

        });


    }
    $scope.GetEmpList();

    $scope.deleteData = function (id) {
        angularService.delEmp(id).then(function (res) {
            if (res.data.Message == "Success") {
                $scope.GetEmpList();
                 alert("Delete Successfull")
            } else {
                alert("Not Deleted")
            }

        });
    }
    $scope.EditData = function(m) {

        $scope.EmployeeId = m.EmployeeId;
        $scope.name = m.Name;
        $scope.mobile = Number(m.Mobile);
        $scope.email = m.Email;
        $scope.address = m.Addess;

        $scope.btnName = "Update";
    }

});