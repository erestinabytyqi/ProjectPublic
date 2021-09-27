using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.homepagemessages
{
    public class Create
    {
        public class Command : IRequest
        {
            public HomePageMessages HomepageMessages { get; set; }
        }
        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.HomepageMessages.Add(request.HomepageMessages);

                await _context.SaveChangesAsync();
                
                return Unit.Value;//leting our api controller that we finished whatever is happening inside here
            }
        }
    }
}