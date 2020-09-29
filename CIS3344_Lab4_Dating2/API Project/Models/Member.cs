using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_Project.Models
{
    public class Member
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }


        public Member(int Id, string Name, string Address, string Phone, string Email, string Username, string Password)
        {
            this.Id = Id;
            this.Name = Name;
            this.Address = Address;
            this.Phone = Phone;
            this.Email = Email;
            this.Username = Username;
            this.Password = Password;
        }

        public Member() { }
    }
}

