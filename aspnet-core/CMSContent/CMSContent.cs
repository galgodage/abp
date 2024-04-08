using CMSContent;
using CMSContent.Entities;
using CMSContent.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Volo.Abp;
using Volo.Abp.Domain.Repositories;
using Volo.Abp.Modularity;

namespace CMSContentn
{
    
    public class CMSContent: AbpModule
    {
        public override async void OnApplicationInitialization(ApplicationInitializationContext context)
        {
           var service = context.ServiceProvider.GetRequiredService<CMSContentService>();

           await service.GetListAsync();   

        }

        public override void ConfigureServices(ServiceConfigurationContext context)
        {
            //Register an instance as singleton
            context.Services.TryAddSingleton<IRepository>();
            context.Services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            //Register a factory method that resolves from IServiceProvider
            //context.Services.AddScoped<ITaxCalculator>(
            //    sp => sp.GetRequiredService<TaxCalculator>()
            //);
        }


    }
}
