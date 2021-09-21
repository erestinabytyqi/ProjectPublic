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
        }

    }
}