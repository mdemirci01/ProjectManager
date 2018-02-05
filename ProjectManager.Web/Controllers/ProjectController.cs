using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ProjectManager.Data;
using ProjectManager.Service;

namespace ProjectManager.Web.Controllers
{
    [Produces("application/json")]
    [Route("api/Project")]
    public class ProjectController : Controller
    {
        private readonly IProjectService projectService;
        public ProjectController(IProjectService projectService)
        {
            this.projectService = projectService;
        }
        // GET: api/Project
        [HttpGet]
        public IEnumerable<Project> Get()
        {
            return projectService.GetProjects();
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
