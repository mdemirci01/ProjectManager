using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace ProjectManager.Data
{
    public class Task:BaseEntity
    {
        public Task()
        {
            CreateDate = DateTime.Now;
            TimeSpendings = new HashSet<TimeSpending>();
        }
        [Required]
        [Display(Name = "Görev Adı")]
        public string Name { get; set; }
        [Display(Name = "Açıklama")]
        public string Description { get; set; }
        [Display(Name = "Atanan")]
        public string AssignedTo { get; set; }
        [Display(Name = "Başlangıç Tarihi")]
        public DateTime? StartDate { get; set; }
        [Display(Name = "Bitiş Tarihi")]
        public DateTime? EndDate { get; set; }
        [Display(Name = "Kategori")]
        public string Category { get; set; }
        [Display(Name = "Durum")]
        public Status Status { get; set; }
        [Display(Name = "Proje")]
        public string ProjectId { get; set; }
        [ForeignKey("ProjectId")]
        [Display(Name = "Proje")]
        public Project Project { get; set; }
        [Display(Name="Öncelik")]
        public int Priority { get; set; }
        public string Attachment { get; set; }
        public ICollection<TimeSpending> TimeSpendings { get; set; }
        public decimal TotalTimeSpent { get { return TimeSpendings.Sum(s => s.TimeSpent); } }
    }
}
