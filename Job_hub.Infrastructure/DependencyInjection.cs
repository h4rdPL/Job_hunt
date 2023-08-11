using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.ComponentModel.DataAnnotations;
using System.Configuration;
using Job_hub.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using Job_hub.Infrastructure.Repositories;

namespace Job_hub.Infrastructure
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddInfrastructure(this IServiceCollection services)
        {
            services.AddTransient<JobRepositories>();
            services.AddDbContext<JobHuntDbContext>(options => options.UseSqlServer("Data Source=MATEUSZ;Initial Catalog=job_hunt;Integrated Security=True;Connect Timeout=30;Encrypt=False;Trust Server Certificate=False;Application Intent=ReadWrite;Multi Subnet Failover=False"));
            return services;
        }
    }
}
