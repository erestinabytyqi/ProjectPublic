using System;

namespace Domain
{
    public class HomePageMessages
    {
           public Guid Id{get;set;}
        public  string WorkName{ get; set; }
        public string AdminName{ get; set; }
        public DateTime Date{get;set;}

        public string ShortDescription{ get; set; }
        public string LongDescription{get;set;}
        public string Place{get;set;}
        public string Remote{get;set;}
        public string Urgent{get;set;}
    }
}