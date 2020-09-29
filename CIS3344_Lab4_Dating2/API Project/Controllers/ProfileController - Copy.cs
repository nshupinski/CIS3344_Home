using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using CIS3344_Lab4_Dating2;

namespace API_Project.Models
{
    [Route("api/Profile")]
    [ApiController]
    public class ProfileController : ControllerBase
    {

        [HttpGet("GetProfile/{id}")]
        public Profile[] Get(int id)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Profiles WHERE id=" + id);
            DataTable profiles = ds.Tables[0];
            int count = profiles.Rows.Count;
            Profile[] profileArray = new Profile[count];
            for (int i = 0; i < count; i++)
            {
                Profile p = new Profile();
                DataRow currentProf = profiles.Rows[i];
                p.id = int.Parse(currentProf["id"].ToString());
                p.Gender = currentProf["Gender"].ToString();
                p.Image = (currentProf["Image"].ToString());
                p.Title = currentProf["Title"].ToString();
                p.Name = currentProf["Name"].ToString();
                p.Age = DateTime.Parse(currentProf["Age"].ToString());
                p.Description = currentProf["Description"].ToString();
                p.City = currentProf["City"].ToString();
                p.State = currentProf["State"].ToString();
                p.Status = currentProf["Status"].ToString();
                p.hasKids = currentProf["hasKids"].ToString();
                p.wantsKids = currentProf["wantsKids"].ToString();
                p.Religion = currentProf["Religion"].ToString();
                p.RelType = currentProf["RelType"].ToString();
                profileArray[i] = p;
            }

            return profileArray;
        }


        [HttpPost]                    // api/Profile
        [HttpPost("addProfile")]      // api/Profile/addProfile
        public bool Post([FromBody] Profile p)
        {
            DBConnect db = new DBConnect();
            string strSQL = "INSERT INTO Profiles (id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType)" +
                "VALUES (" + p.id + ", '" + p.Gender + "', '" + p.Image + "', '" + p.Title + "', '" + p.Name + "', " + p.Age + ", '" + p.Description + "', " +
                "'" + p.City + "', '" + p.State + "', '" + p.Status + "', '" + p.hasKids + "', '" + p.wantsKids + "', '" + p.Religion + "', '" + p.RelType + "')";

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
    }
}