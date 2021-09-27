using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context){
            if (context.Activities.Any()) return;
            var activities = new List<Activity>
            {
                new Activity
                {
                    Title ="Past Activity 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description="Activity 2 months ago",
                    Category="drinks",
                    City="London",
                    Venue="Pub",
                },
                new Activity
                {
                       Title ="Past Activity 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description="Activity 2 months in the future",
                    Category="music",
                    City="London",
                    Venue="02 Area",
                },
                    new Activity
                {
                       Title ="Past Activity 3",
                    Date = DateTime.Now.AddMonths(3),
                    Description="Activity 3 months in the future",
                    Category="drinks",
                    City="London",
                    Venue="Another Pub",
                },
                    new Activity
                {
                       Title ="Past Activity 4",
                    Date = DateTime.Now.AddMonths(-1),
                    Description="Activity 2 months in the future",
                    Category="music",
                    City="London",
                    Venue="02 Area",
                },
            };
            await  context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();//saves data
             if(context.HomepageMessages.Any()) return;
                var homepagemessages = new List<HomePageMessages>{
                    new HomePageMessages
                    {
                        WorkName="Create a Syllabus WebDesign",
                        AdminName="Erestina Bytyqi",
                        Date= DateTime.Now.AddMonths(1),
                        ShortDescription="This job includes designing of a website as well as maintaining it for 6 months",
                        LongDescription="Job includes knowledge of reactjs , css, nodejs,.netcore,backend more however we need you to be able to do things on your own . The project is very important when it comes to this side. it has to do lots and lots of work.The more work the merrier, please introduce us to your very best self. Moreover about the job . The job includes the raw coding and the debuggin on your side . moreover it includes the frontend design as well as the problems that might ocurr into the react front end developing course.",
                        Place="Kosovo",
                        Remote="Yes,Its Remote",
                        Urgent="Urgent"
                    },
                };
                await context.HomepageMessages.AddRangeAsync(homepagemessages);
                await context.SaveChangesAsync();
        }

    }
}