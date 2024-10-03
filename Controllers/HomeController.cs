using CRUDMVCAngularJs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CRUDMVCAngularJs.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        EmployeeDataContext dataContext = new EmployeeDataContext();
        public JsonResult SaveEmployee(EmployeeModel model)
        {
            Employee e = null;
            if(model.EmployeeId == 0)
            
               e = new Employee();
            else 
                e = dataContext.Employees.Where(x=>x.EmployeeId == model.EmployeeId).FirstOrDefault();
            e.Addess = model.Address;
            e.Email = model.Email;
            e.Mobile = model.Mobile;
            e.Name = model.Name;

            if(model.EmployeeId == 0)
            {
                e.EntryDate = DateTime.Now;
                dataContext.Employees.InsertOnSubmit(e);
            }
            dataContext.SubmitChanges();
            return Json(new {Message="Success"}, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetEmployeeList()
        {
            var list = dataContext.Employees.ToList();
            return Json(new {Message="Success", EmployeeList = list}, JsonRequestBehavior.AllowGet);
        }

        public JsonResult DelEmp(int id)
        {
            var emp = dataContext.Employees.Where(x=>x.EmployeeId == id).FirstOrDefault();
            dataContext.Employees.DeleteOnSubmit(emp);
            dataContext.SubmitChanges();
            return Json(new { Message = "Success",}, JsonRequestBehavior.AllowGet);
        }
    }
}