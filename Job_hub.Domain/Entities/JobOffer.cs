using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Job_hub.Domain.Data.Enum;

namespace Job_hub.Domain.Entities
{
    public class JobOffer
    {
        public int Id { get; set; }
        public string Job_name { get; set; }
        public string CompanyName { get; set; }
        public string Salary { get; set; }
        public string Location { get; set; }
        public JobType JobType { get; set; }
        public DateTime Created_at {get; set; }
    }
}
