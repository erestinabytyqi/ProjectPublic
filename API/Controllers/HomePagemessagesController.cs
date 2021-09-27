using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Application.homepagemessages;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class HomePagemessagesController: BaseAPIController
    {
        [HttpGet]
        public async Task<ActionResult<List<HomePageMessages>>> GetHomepageMessages(){
                return await Mediator.Send(new List.Query());
        }



            [HttpGet("{id}")]//activities
        public async Task<ActionResult<HomePageMessages>> GetHomepageMessages(Guid id)
        {
            return await Mediator.Send(new Details.Query{Id=id});
        }










             [HttpPost]
         public async Task<IActionResult> CreateHomepagemessage(HomePageMessages homepagemessages)
         {
             return Ok(await Mediator.Send(new Create.Command {HomepageMessages=homepagemessages}));
         }
         
         [HttpPut("{id}")]
        public async Task<IActionResult>EditHomepagemessages(Guid id, HomePageMessages homepagemessages)
        {
            homepagemessages.Id=id;
            return Ok(await Mediator.Send(new Edit.Command{HomePageMessages=homepagemessages}));
        }
            [HttpDelete("{id}")]    
            public async Task<IActionResult> DeleteHomepagemessage(Guid id){
                return Ok(await Mediator.Send(new Delete.Command{Id=id}));
            }
    }
}