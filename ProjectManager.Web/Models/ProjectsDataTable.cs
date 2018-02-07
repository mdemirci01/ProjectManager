using ProjectManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManager.Web.Models
{
    public class ProjectsDataTable
    {
        public ProjectsDataTable()
        {
            Meta = new Meta();
            Data = new HashSet<Project>();
        }
        public Meta Meta { get; set; }
        public IEnumerable<Project> Data { get; set; }
    }
}
