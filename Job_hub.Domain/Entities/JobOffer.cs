using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Job_hub.Domain.Data.Enum;

namespace Job_hub.Domain.Entities
{
    public partial class JobOffer
    {
        [Key]
        public int Id { get; set; }
        public string Job_name { get; set; }
        public string CompanyName { get; set; }
        public string Salary { get; set; }
        public string Location { get; set; }
        public string JobType { get; set; }
        public string IdealCandidate { get; set; }
        public List<Tag> Tags { get; set; }
        public List<Responsibility> Responsibilities { get; set; }
        public JobCategory JobCategory { get; set; }
        public DateTime Created_at {get; set; } = DateTime.Now;
    }
}
