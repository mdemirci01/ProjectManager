using ProjectManager.Data;
using ProjectManager.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectManager.Service
{
    public class ProjectService : IProjectService
    {
        private readonly IRepository<Project> projectRepository;
        public ProjectService(IRepository<Project> projectRepository)
        {
            this.projectRepository = projectRepository;
        }
        public void DeleteProject(string id)
        {
            var project = projectRepository.Get(id);
            if (project != null) { 
                projectRepository.Delete(project);
                projectRepository.SaveChanges();
            }
        }

        public Project GetProject(string id)
        {
            return projectRepository.Get(id);
        }

        public IEnumerable<Project> GetProjects()
        {
            return projectRepository.GetAll();
        }

        public void InsertProject(Project project)
        {
            projectRepository.Insert(project);
        }

        public void UpdateProject(Project project)
        {
            projectRepository.Update(project);
        }
    }

    public interface IProjectService
    {
        IEnumerable<Project> GetProjects();
        Project GetProject(string id);
        void InsertProject(Project project);
        void UpdateProject(Project project);
        void DeleteProject(string id);
    }
}
