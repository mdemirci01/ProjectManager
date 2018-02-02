using ProjectManager.Data;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectManager.Repo
{
    public interface IRepository<T> where T : BaseEntity
    {
        IEnumerable<T> GetAll();
        T Get(string id);
        void Insert(T entity);
        void Update(T entity);
        void Delete(T entity);
        void Remove(T entity);
        void SaveChanges();
    }
}
