using Application.Core;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")] //if the localhost5000/api/controller doesnt work then in the route u can either add api/ [controller
//or u can just remove api and  just go by the controller name
    public class BaseAPIController :ControllerBase
    {
        private IMediator _mediator;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();

        protected ActionResult HandleResult<T>(Result<T> result){
            if (result==null) return NotFound();
               if(result.IsSuccess && result.Value != null)
          return Ok(result.Value);
          if(result.IsSuccess && result.Value==null)
          return NotFound();
          return BadRequest(result.Error);
        }


    }
}