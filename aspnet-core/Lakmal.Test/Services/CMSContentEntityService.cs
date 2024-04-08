using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;
using Lakmal.Test.Entities;
using Lakmal.Test.Services.Dtos;

namespace Lakmal.Test.Services
{
    public class CMSContentEntityService : ApplicationService
    {

        private readonly IRepository<CMSContenEntity, Guid> _CMSContentEntityepository;

        public CMSContentEntityService(IRepository<CMSContenEntity, Guid> todoItemRepository)
        {
            _CMSContentEntityepository = todoItemRepository;
        }


        public async Task<List<CMSContenEntityDto>> GetListAsync()
        {
            var items = await _CMSContentEntityepository.GetListAsync();
            return items
                .Select(item => new CMSContenEntityDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Description = item.Description,
                    Type = item.Type
                }).ToList();
        }


        public async Task<CMSContenEntityDto> CreateAsync(string text, string description)
        {
            var contentItem = await _CMSContentEntityepository.InsertAsync(
                new CMSContenEntity { Name = text ,Description=description, Type="CMS"}
            );

            return new CMSContenEntityDto
            {
                Id = contentItem.Id,
                Name = contentItem.Name,
                Description = contentItem.Description,
                Type="CMS"
                
            };
        }

        public async Task DeleteAsync(Guid id)
        {
            await _CMSContentEntityepository.DeleteAsync(id);
        }


    }
}
