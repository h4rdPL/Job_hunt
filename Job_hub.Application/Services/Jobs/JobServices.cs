using Job_hub.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Job_hub.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Job_hub.Domain.DTO;
using Job_hub.Domain.Data.Enum;

namespace Job_hub.Application.Services.Jobs
{
    public class JobServices : IJobService
    {
        private readonly JobHuntDbContext _context;

        public JobServices(JobHuntDbContext context)
        {
            _context = context;
        }

        private static List<JobOffer> _jobs = new List<JobOffer>();
        /// <summary>
        /// Create Job
        /// </summary>
        /// <param name="JobOffer">Job Entities From Domain </param>
        /// <returns>new Job offer</returns>
        /// <exception cref="NotImplementedException"></exception>
        public Task<JobOffer> Create(JobOffer JobOffer)
        {
            _jobs.Add(JobOffer);
            return Task.FromResult(JobOffer);
        }

        /// <summary>
        /// Get all job offers
        /// </summary>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public List<JobDTO> GetAll() // Change the return type to List<JobDTO>
        {
            var jobOffersWithRelations = _context.JobOffers
                .Include(j => j.Responsibilities)
                .Include(j => j.Tags)
                .ToList();

            var jobs = jobOffersWithRelations.Select(job => new JobDTO
            {
                Id = job.Id,
                Job_name = job.Job_name,
                Job_about = job.Job_about,
                CompanyName = job.CompanyName,
                JobCategory = job.JobCategory,
                IdealCandidate = job.IdealCandidate,
                Salary = job.Salary,
                Location = job.Location,
                JobType = job.JobType,


                Tag = job.Tags.Select(tag => new TagDTO { Name = tag.Name }).ToList(),
                Responsabilities = job.Responsibilities.Select(resp => new ResponsabilitiesDTO { Name = resp.Name }).ToList()
            }).ToList();

            return jobs;
        }



        public List<JobDTO> GetByCategory(JobCategory jobCategory)
        {
            var jobOffersWithRelations = _context.JobOffers
                    .Include(j => j.Responsibilities)
                    .Include(j => j.Tags)
                    .Where(j => j.JobCategory == jobCategory)
                    .ToList();

            var jobs = jobOffersWithRelations.Select(job => new JobDTO
            {
                Id = job.Id,
                Job_name = job.Job_name,
                CompanyName = job.CompanyName,
                Salary = job.Salary,
                Location = job.Location,
                JobType = job.JobType,
                JobCategory = jobCategory, 
                Tag = job.Tags.Select(tag => new TagDTO { Name = tag.Name }).ToList(),
                Responsabilities = job.Responsibilities.Select(resp => new ResponsabilitiesDTO { Name = resp.Name }).ToList()
            }).ToList();

            return jobs;
        }


    }
}
