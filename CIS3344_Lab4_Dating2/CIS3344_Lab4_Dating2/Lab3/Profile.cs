using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CIS3344_Lab4_Dating2
{
    public class Profile
    {
        public int id { get; set; }
        public string Gender { get; set; }
        public string Image { get; set; }
        public string Title { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Status { get; set; }
        public string hasKids { get; set; }
        public string wantsKids { get; set; }
        public string Religion { get; set; }
        public string RelType { get; set; }

        public Profile(int id, string Gender, string Image, string Title, string Name, int Age, string Description, string City, string State, string Status, string hasKids, string wantsKids, string Religion, string RelType)
        {
            this.Gender = Gender;
            this.Image = Image;
            this.Title = Title;
            this.Name = Name;
            this.Age = Age;
            this.Description = Description;
            this.City = City;
            this.State = State;
            this.Status = Status;
            this.hasKids = hasKids;
            this.wantsKids = wantsKids;
            this.Religion = Religion;
            this.RelType = RelType;
        }

        public Profile() { }
    }
}