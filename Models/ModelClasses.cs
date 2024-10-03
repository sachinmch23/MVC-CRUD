using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CRUDMVCAngularJs.Models
{
    public class EmployeeModel
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string Mobile { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
    }
}