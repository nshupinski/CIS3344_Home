using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using CIS3344_Lab4_Dating2;
using API_Project.Models;

namespace API_Project.Controllers
{
    [Route("api/Profile")]
    public class ProfileController : ControllerBase
    {
        [HttpGet]
        [HttpGet("GetProfiles")]
        public Profile[] Get()
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Profiles");
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
                p.Age = int.Parse(currentProf["Age"].ToString());
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

        [HttpGet("GetLikedProfiles")]
        public Profile[] GetLiked()
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM LikedProfiles");
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
                p.Age = int.Parse(currentProf["Age"].ToString());
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

        [HttpGet("GetPassedProfiles")]
        public Profile[] GetPassed()
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM PassedProfiles");
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
                p.Age = int.Parse(currentProf["Age"].ToString());
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

        [HttpGet("GetProfile/{id}")]
        public Profile Get(int id)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("SELECT * FROM Profiles WHERE id=" + id);
            DataTable profiles = ds.Tables[0];

            Profile p = new Profile();
            DataRow currentProf = profiles.Rows[id];
            p.id = int.Parse(currentProf["id"].ToString());
            p.Gender = currentProf["Gender"].ToString();
            p.Image = (currentProf["Image"].ToString());
            p.Title = currentProf["Title"].ToString();
            p.Name = currentProf["Name"].ToString();
            p.Age = int.Parse(currentProf["Age"].ToString());
            p.Description = currentProf["Description"].ToString();
            p.City = currentProf["City"].ToString();
            p.State = currentProf["State"].ToString();
            p.Status = currentProf["Status"].ToString();
            p.hasKids = currentProf["hasKids"].ToString();
            p.wantsKids = currentProf["wantsKids"].ToString();
            p.Religion = currentProf["Religion"].ToString();
            p.RelType = currentProf["RelType"].ToString();
            
            return p;
        }


        [HttpPost("addProfile")]      // api/Profile/addProfile
        public bool Post([FromBody] Profile p)
        {
            DBConnect db = new DBConnect();
            string strSQL = "INSERT INTO Profiles (Id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType)" +
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


        [HttpPost("addLikedProfile")]      // api/Profile/addLikedProfile
        public bool PostLiked([FromBody] Profile p)
        {
            DBConnect db = new DBConnect();
            string strSQL = "INSERT INTO LikedProfiles (Id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType)" +
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


        [HttpPost("addPassedProfile")]      // api/Profile/addProfile
        public bool PostPassed([FromBody] Profile p)
        {
            DBConnect db = new DBConnect();
            string strSQL = "INSERT INTO PassedProfiles (id, Gender, Image, Title, Name, Age, Description, City, State, Status, hasKids, wantsKids, Religion, RelType)" +
                "VALUES (" + p.id + ", '" + p.Gender + "', '" + p.Image + "', '" + p.Title + "', '" + p.Name + "', " + p.Age + ", '" + p.Description + "', '" + p.City + "', '" + p.State + "', '" + p.Status + "', '" + p.hasKids + "', '" + p.wantsKids + "', '" + p.Religion + "', '" + p.RelType + "')";

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


        [HttpDelete("DeleteProfile/{Id}")]
        public bool Delete(int Id)
        {
            DBConnect db = new DBConnect();
            int delete = db.DoUpdate("DELETE FROM Profiles where Id=" + Id);
            if (delete > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpDelete("DeleteProfileFromLiked/{Id}")]
        public bool DeleteLiked(int Id)
        {
            DBConnect db = new DBConnect();
            int delete = db.DoUpdate("DELETE FROM LikedProfiles where Id=" + Id);
            if (delete > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }


        [HttpDelete("DeleteProfileFromPassed/{Id}")]
        public bool DeletePassed(int Id)
        {
            DBConnect db = new DBConnect();
            int delete = db.DoUpdate("DELETE FROM PassedProfiles where Id=" + Id);
            if (delete > 0)
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