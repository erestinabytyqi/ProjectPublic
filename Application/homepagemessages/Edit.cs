using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.homepagemessages
{
    public class Edit
    {
        public class Command : IRequest
        {
            public HomePageMessages HomePageMessages { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;
            public Handler(DataContext context, IMapper mapper)
            {
                _mapper = mapper;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.HomepageMessages.FindAsync(request.HomePageMessages.Id);

                _mapper.Map(request.HomePageMessages, activity);

                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}