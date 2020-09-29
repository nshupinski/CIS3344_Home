using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Utilities;
using System.Data;
using Game_Gurus_API.Models;

namespace Game_Gurus_API.Controllers
{
    [Route("api/Review")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        [HttpGet("GetReviewsByUser/{userId}")]
        public Review[] Get(string userId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select * from GameReviews where userId='" + userId + "'");
            DataTable reviews = ds.Tables[0];
            int count = reviews.Rows.Count;
            Review[] reviewArray = new Review[count];
            for (int i = 0; i < count; i++)
            {
                Review rev = new Review();
                DataRow currentRev = reviews.Rows[i];
                rev.reviewId = int.Parse(currentRev["reviewId"].ToString());
                rev.gameId = int.Parse(currentRev["gameId"].ToString());
                rev.userId = currentRev["userId"].ToString();
                rev.rating = int.Parse(currentRev["rating"].ToString());
                rev.description = currentRev["description"].ToString();
                rev.date = currentRev["date"].ToString();
                reviewArray[i] = rev;
            }

            return reviewArray;
        }

        [HttpGet("GetReviewsByGame/{gameId}")]
        public Review[] Get(int gameId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select * from GameReviews where gameId=" + gameId);
            DataTable reviews = ds.Tables[0];
            int count = reviews.Rows.Count;
            Review[] reviewArray = new Review[count];
            for (int i = 0; i < count; i++)
            {
                Review rev = new Review();
                DataRow currentRev = reviews.Rows[i];
                rev.reviewId = int.Parse(currentRev["reviewId"].ToString());
                rev.gameId = int.Parse(currentRev["gameId"].ToString());
                rev.userId = currentRev["userId"].ToString();
                rev.rating = int.Parse(currentRev["rating"].ToString());
                rev.description = currentRev["description"].ToString();
                rev.date = currentRev["date"].ToString();
                reviewArray[i] = rev;
            }

            return reviewArray;
        }

        [HttpPost("WriteReview")]
        public bool Post([FromBody] Review r)
        {
            DBConnect db = new DBConnect();
            string description = r.description;
            string newDescription = "";
            string[] split = description.Split("'");
            for (int i = 0; i < split.Length - 1; i++)
            {
                newDescription += (split[i] + "''");
            }
            newDescription += split[split.Length - 1];

            int written = db.DoUpdate("insert into GameReviews (gameId, userId, rating, description, date)" +
                " values (" + r.gameId + ",'" + r.userId + "'," + r.rating + ",'" + newDescription + "','" + r.date + "')");

            if (written > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        [HttpPut("ValidateUser/{userId}")]
        public bool Put(string userId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select 1 from GameReviews where userId='" + userId + "'");
            DataTable table = ds.Tables[0];
            int count = table.Rows.Count;

            DataSet ds2 = db.GetDataSet("select 1 from FavoriteReviews where userId='" + userId + "'");
            DataTable table2 = ds2.Tables[0];
            int count2 = table2.Rows.Count;

            if (count > 0 || count2 > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet("AverageRating/{gameId}")]
        public decimal GetAverage(int gameId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select rating from GameReviews where gameId=" + gameId);
            DataTable reviews = ds.Tables[0];
            decimal total = 0;
            decimal count = reviews.Rows.Count;
            if (count == 0)
            {
                return 0;
            }
            else
            {
                for (int i = 0; i < count; i++)
                {
                    DataRow row = reviews.Rows[i];
                    total += decimal.Parse(row["rating"].ToString());
                }
                return Math.Round(total / count, 1);
            }
        }

        [HttpDelete("DeleteReview/{reviewId}")]
        public bool Delete(int reviewId)
        {
            DBConnect db = new DBConnect();
            int delete = db.DoUpdate("delete from GameReviews where reviewId=" + reviewId);
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