using Job_hub.Domain.Data.Enum;
using System.ComponentModel.DataAnnotations;

namespace Job_hub.Domain.Entities
{
    public partial class JobOffer
    {
        [Key]
        public int Id { get; set; }
        public string Job_name { get; set; }
        public string Job_about { get; set; }
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
