using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Persistence;

namespace Application.homepagemessages
{
    public class List
    {
        public class Query : IRequest<List<HomePageMessages>> { }


        public class Handler : IRequestHandler<Query, List<HomePageMessages>>
        {
            private readonly DataContext _context;
            
            public Handler(DataContext context)
            {
           
                _context = context;
            }

            public async Task<List<HomePageMessages>> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.HomepageMessages.ToListAsync(cancellationToken);
            }

           
        }


    }
}