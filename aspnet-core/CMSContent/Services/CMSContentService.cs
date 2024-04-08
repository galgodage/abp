using CMSContent.dto;
using CMSContent.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace CMSContent.Services
{
    public class CMSContentService : ITransientDependency
    {
        private readonly IRepository<CMSConten, Guid> _CMSContentepository;

        public CMSContentService(IRepository<CMSConten, Guid> todoItemRepository)
        {
            _CMSContentepository = todoItemRepository;
        }


        public async Task<List<CMSContenDto>> GetListAsync()
        {
            var items = await _CMSContentepository.GetListAsync();
            return items
                .Select(item => new CMSContenDto
                {
                    Id = item.Id,
                    Name = item.Name,
                    Description = item.Description
                   
                }).ToList();
        }


        public async Task<CMSContenDto> CreateAsync(string text, string description)
        {
            var contentItem = await _CMSContentepository.InsertAsync(
                new CMSConten { Name = text, Description = description }
            );

            return new CMSContenDto
            {
                Id = contentItem.Id,
                Name = contentItem.Name,
                Description = contentItem.Description
              

            };
        }

        public async Task DeleteAsync(Guid id)
        {
            await _CMSContentepository.DeleteAsync(id);
        }
    }
}
