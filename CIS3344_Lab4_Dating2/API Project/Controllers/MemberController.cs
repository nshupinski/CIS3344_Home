using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using API_Project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API_Project.Controllers
{
    [Route("api/Member")]
    public class MemberController : ControllerBase
    {
        [HttpGet("GetMember/{id}")]
        public Member[] Get(int id)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Members WHERE id=" + id);
            DataTable members = ds.Tables[0];
            int count = members.Rows.Count;
            Member[] memberArray = new Member[count];
            for (int i = 0; i < count; i++)
            {
                Member m = new Member();
                DataRow currentMember = members.Rows[i];
                m.Id = int.Parse(currentMember["Id"].ToString());
                m.Name = currentMember["Name"].ToString();
                m.Address = currentMember["Address"].ToString();
                m.Phone = currentMember["Phone"].ToString();
                m.Email = currentMember["Email"].ToString();
                m.Username = currentMember["Username"].ToString();
                m.Password = (currentMember["Password"].ToString());
                
                memberArray[i] = m;
            }

            return memberArray;
        }

        [HttpGet("GetMembers")]
        public Member[] Get()
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Members");
            DataTable members = ds.Tables[0];
            int count = members.Rows.Count;
            Member[] memberArray = new Member[count];
            for (int i = 0; i < count; i++)
            {
                Member m = new Member();
                DataRow currentMember = members.Rows[i];
                m.Id = int.Parse(currentMember["Id"].ToString());
                m.Name = currentMember["Name"].ToString();
                m.Address = currentMember["Address"].ToString();
                m.Phone = currentMember["Phone"].ToString();
                m.Email = currentMember["Email"].ToString();
                m.Username = currentMember["Username"].ToString();
                m.Password = currentMember["Password"].ToString();
                memberArray[i] = m;
            }

            return memberArray;
        }


        [HttpPost("addMember")]      // api/Member/addMember
        public bool Post([FromBody] Member m)
        {
            DBConnect db = new DBConnect();
            string strSQL = "INSERT INTO Members (Id, Name, Address, Phone, Email, Username, Password) " +
                "VALUES (" + m.Id + ", '" + m.Name + "', '" + m.Address + "', '" + m.Phone + "', '" + m.Email + "', '" + m.Username + "', '" + m.Password + "')";

            int result = db.DoUpdate(strSQL);

            if (result > 0)
            {
                return true;
            }
            else
            {
                return false;

            }
        }


        [HttpGet("Verify/{username}")]
        public Member Verify(string username)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Members WHERE Username='" + username + "'");
            DataTable members = ds.Tables[0];
            int count = members.Rows.Count;
            Member m = new Member();
            for (int i = 0; i < count; i++)
            {
                DataRow currentMember = members.Rows[i];
                m.Id = int.Parse(currentMember["Id"].ToString());
                m.Name = currentMember["Name"].ToString();
                m.Address = currentMember["Address"].ToString();
                m.Phone = currentMember["Phone"].ToString();
                m.Email = currentMember["Email"].ToString();
                m.Username = currentMember["Username"].ToString();
                m.Password = (currentMember["Password"].ToString());
            }
            return m;
        }
    }
}