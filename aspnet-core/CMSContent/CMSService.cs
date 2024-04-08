using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace CMSContent
{
    public class CMSService: ITransientDependency
    {
        public CMSService() { }
        public void Initialize() 
        {

            Console.WriteLine("test plugging    ");
        }
    }
}
