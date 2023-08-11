using Job_hub.Domain.Data.Enum;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Job_hub.Domain.Entities.JobOffer;

namespace Job_hub.Domain.DTO
{
    public record struct JobDTO(
            int Id,
            string Job_name, 
            string CompanyName,
            string Salary, 
            string Location,
            string IdealCandidate,
            string JobType,
            JobCategory JobCategory, 
            DateTime Created_at,
            List<TagDTO> Tag,
            List<ResponsabilitiesDTO> Responsabilities
        );
}
