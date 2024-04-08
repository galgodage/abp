using Volo.Abp.Domain.Entities;

namespace Lakmal.Test.Entities
{
    public class CMSContenEntity : BasicAggregateRoot<Guid>
    {
       
        public string Name { get; set; }
        public string Description { get; set; }
        public string Type { get; set; }

    }
}
