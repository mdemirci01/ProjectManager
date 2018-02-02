using ProjectManager.Data;
using ProjectManager.Repo;
using System;
using System.Collections.Generic;
using System.Text;

namespace ProjectManager.Service
{
    public class UserService:IUserService
    {
        private IRepository<User> userRepository;
        private IRepository<UserProfile> userProfileRepository;

        public UserService(IRepository<User> userRepository, IRepository<UserProfile> userProfileRepository)
        {
            this.userRepository = userRepository;
            this.userProfileRepository = userProfileRepository;
        }

        public IEnumerable<User> GetUsers()
        {
            return userRepository.GetAll();
        }

        public User GetUser(string id)
        {
            return userRepository.Get(id);
        }

        public void InsertUser(User user)
        {
            userRepository.Insert(user);
        }
        public void UpdateUser(User user)
        {
            userRepository.Update(user);
        }

        public void DeleteUser(string id)
        {
            UserProfile userProfile = userProfileRepository.Get(id);
            userProfileRepository.Remove(userProfile);
            User user = GetUser(id);
            userRepository.Remove(user);
            userRepository.SaveChanges();
        }
    }
    public interface IUserService
    {
        IEnumerable<User> GetUsers();
        User GetUser(string id);
        void InsertUser(User user);
        void UpdateUser(User user);
        void DeleteUser(string id);
    }
}
