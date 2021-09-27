using System;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.homepagemessages
{
    public class Details
    {
        public class Query : IRequest<HomePageMessages>
        {
            public Guid Id { get; set; }
        }
        public class Handler : IRequestHandler<Query, HomePageMessages>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<HomePageMessages> Handle(Query request, CancellationToken cancellationToken)
            {
                return await _context.HomepageMessages.FindAsync(request.Id);
            }
        }
    }
}