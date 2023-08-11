using Job_hub.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Infrastructure.Internal;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static Job_hub.Domain.Entities.JobOffer;

namespace Job_hub.Infrastructure.Context
{
    public class JobHuntDbContext : DbContext
    {

        public JobHuntDbContext(DbContextOptions<JobHuntDbContext> options) : base(options)
        {

        }
        public DbSet<JobOffer> JobOffers { get; set; }
        public DbSet<Responsibility> Responsibilities { get; set; }
        public DbSet<Tag> Tags { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobOffer>()
                 .HasMany(j => j.Responsibilities)
                 .WithOne(r => r.JobOffer)
                 .HasForeignKey(r => r.JobOfferId);

            modelBuilder.Entity<JobOffer>()
                .HasMany(j => j.Tags)
                .WithOne(t => t.JobOffer)
                .HasForeignKey(t => t.JobOfferId);

        }
    }

}
