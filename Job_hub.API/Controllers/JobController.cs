using Job_hub.Application.Services.Jobs;
using Job_hub.Domain.Data.Enum;
using Job_hub.Domain.DTO;
using Job_hub.Domain.Entities;
using Job_hub.Infrastructure.Context;
using Microsoft.AspNetCore.Mvc;
using System.Data.Entity;
using static Job_hub.Domain.Entities.JobOffer;

namespace Job_hub.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {
        private readonly IJobService _jobService;
        private readonly JobHuntDbContext _context;
        public JobController(IJobService jobService, JobHuntDbContext context)
        {
            _jobService = jobService;
            _context = context;
        }


        [HttpPost("create")]
        public async Task<ActionResult<List<JobOffer>>> Create(JobDTO jobOffer)
        {
            var newJobOffer = new JobOffer
            {
                Id = jobOffer.Id,
                Job_name = jobOffer.Job_name,
                CompanyName = jobOffer.CompanyName,
                JobCategory = jobOffer.JobCategory,
                Salary = jobOffer.Salary,
                Location = jobOffer.Location,
                JobType = jobOffer.JobType,
                IdealCandidate = jobOffer.IdealCandidate,
            };

            var responsibilities = jobOffer.Responsabilities.Select(r => new Responsibility { Name = r.Name, JobOffer = newJobOffer }).ToList();
            var tags = jobOffer.Tag.Select(r => new Tag { Name = r.Name, JobOffer = newJobOffer }).ToList();
            newJobOffer.Responsibilities = responsibilities;
            newJobOffer.Tags = tags;

            var jobResult = _context.JobOffers.Add(newJobOffer);

            _context.SaveChanges();

            return Ok(_context.JobOffers
                .Include(j => j.Responsibilities)
                .Include(j => j.Tags)
                .ToList());
        }


        [HttpGet("getJob")]
        public IActionResult GetJobWithRelations()
        {
            var jobOffersWithRelations = _jobService.GetAll();
            return Ok(jobOffersWithRelations);
        }

        [HttpGet("getJobByCategory")]
        public List<JobDTO> GetJobByCategory(JobCategory jobCategory)
        {
            var jobOfferByCategory = _jobService.GetByCategory(jobCategory);
            return jobOfferByCategory;
        }




    }
}
