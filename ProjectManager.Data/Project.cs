using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;

namespace ProjectManager.Data
{
    public class Project:BaseEntity
    {
        public Project()
        {
            CreateDate = DateTime.Now;
            Tasks = new HashSet<Task>();
            TimeSpendings = new HashSet<TimeSpending>();
        }
        [Required]
        [Display(Name = "Proje Adı")]
        public string Name { get; set; }
        [Display(Name = "Açıklama")]
        public string Description { get; set; }
        [Display(Name = "Yöneticiler")]
        public string Managers { get; set; }
        [Display(Name = "İş Analistleri")]
        public string BussinessAnalyists { get; set; }
        [Display(Name = "Geliştiriciler")]
        public string Developers { get; set; }
        [Display(Name = "Başlangıç Tarihi")]
        public DateTime? StartDate { get; set; }
        [Display(Name = "Bitiş Tarihi")]
        public DateTime? EndDate { get; set; }
        [Display(Name="Kullanılan Teknolojiler")]
        public string Technologies { get; set; }
        [Display(Name = "Durum")]
        public Status Status { get; set; }
        public ICollection<Task> Tasks { get; set; }
        public ICollection<TimeSpending> TimeSpendings { get; set; }
        public int TotalTaskCount { get { return Tasks.Count(); } }
        public int TotalWorkCount { get { return TimeSpendings.Count(); } }
        public int TotalCompletedWorkCount { get { return TimeSpendings.Where(t=>t.Status == Status.Completed).Count(); } }
        public int TotalTimeSpent { get { return TimeSpendings.Sum(s => s.TimeSpent); } }
    }
}
