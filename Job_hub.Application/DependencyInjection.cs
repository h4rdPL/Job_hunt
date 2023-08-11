using Job_hub.Application.Services.Jobs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace Job_hub.Application
{
        public static class DependencyInjection
        {
            public static IServiceCollection AddApplication(this IServiceCollection services)
            {
                services.AddScoped<IJobService, JobServices>();
                return services;
            }
        }
}
