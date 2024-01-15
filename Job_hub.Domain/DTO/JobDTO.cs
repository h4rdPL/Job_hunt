using Job_hub.Domain.Data.Enum;

namespace Job_hub.Domain.DTO
{
    public record struct JobDTO(
            int Id,
            string Job_name, 
            string Job_about,
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
