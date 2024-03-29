﻿using Job_hub.Domain.Entities;
using Job_hub.Infrastructure.Context;

namespace Job_hub.Infrastructure.Repositories
{
    public class JobRepositories
    {
        private readonly JobHuntDbContext _context;

        public JobRepositories(JobHuntDbContext context)
        {
            _context = context; 
        }
        
        public void Add(JobOffer job)
        {
            _context.Add(job);
            _context.SaveChanges();
        } 

    }
}
