using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")] //if the localhost5000/api/controller doesnt work then in the route u can either add api/ [controller
//or u can just remove api and  just go by the controller name
    public class BaseAPIController :ControllerBase
    {
        
    }
}