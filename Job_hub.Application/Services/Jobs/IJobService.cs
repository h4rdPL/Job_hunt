using Job_hub.Domain.Data.Enum;
using Job_hub.Domain.DTO;
using Job_hub.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Job_hub.Application.Services.Jobs
{
    public interface IJobService
    {
        Task<JobOffer> Create(JobOffer JobOffer);
        List<JobDTO> GetAll();
        List<JobDTO> GetByCategory(JobCategory jobCategory);
    }
}
