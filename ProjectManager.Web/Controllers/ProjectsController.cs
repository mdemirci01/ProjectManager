using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManager.Data;
using ProjectManager.Service;
using ProjectManager.Web.Models;

namespace ProjectManager.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Projects")]
    public class ProjectsController : Controller
    {
        private readonly IProjectService projectService;
        public ProjectsController(IProjectService projectService)
        {
            this.projectService = projectService;
        }
        // GET: api/Project
        [HttpGet]
        public ProjectsDataTable Get()
        {
            var projects = projectService.GetProjects();
            var projectsDt = new ProjectsDataTable();
            projectsDt.Data = projects;
            projectsDt.Meta.Total = projects.Count();
            return projectsDt;
        }

        // GET: api/Project/5
        [HttpGet("{id}", Name = "Get")]
        public Project Get(string id)
        {
            return projectService.GetProject(id);
        }
        
        // POST: api/Project
        [HttpPost]
        public void Post([FromBody]Project value)
        {
            projectService.InsertProject(value);
        }
        
        // PUT: api/Project/5
        [HttpPut("{id}")]
        public void Put(string id, [FromBody]Project value)
        {
            projectService.UpdateProject(value);
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(string id)
        {
            projectService.DeleteProject(id);
        }
    }
}
