using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectManager.Web.Models
{
    public class Meta
    {
        public Meta()
        {
            Page = 1;
            Pages = 1;
            Perpage = 10;
            Sort = "asc";
            Field = "id";
        }
        public int Page { get; set; }
        public int Pages { get; set; }
        public int Perpage { get; set; }
        public int Total { get; set; }
        public string Sort { get; set; }
        public string Field { get; set; }
    }
}
