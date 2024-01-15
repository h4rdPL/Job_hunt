using Job_hub.Domain.Data.Enum;
using Job_hub.Domain.DTO;
using Job_hub.Domain.Entities;

namespace Job_hub.Application.Services.Jobs
{
    public interface IJobService
    {
        Task<JobOffer> Create(JobOffer JobOffer);
        List<JobDTO> GetAll();
        List<JobDTO> GetByCategory(JobCategory jobCategory);
    }
}
