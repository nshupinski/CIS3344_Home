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
    [Route("api/Favorite")]
    [ApiController]
    public class FavoriteController : ControllerBase
    {
        [HttpGet("GetFavorites/{userId}")]
        public Review[] Get(string userId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select g.reviewId, g.gameId, g.userId, g.rating, g.description, g.date from GameReviews g inner join FavoriteReviews f on g.reviewId=f.reviewId where f.userId='" + userId + "'");
            DataTable reviews = ds.Tables[0];
            int count = reviews.Rows.Count;
            Review[] reviewArray = new Review[count];
            for (int i = 0; i < count; i++)
            {
                DataRow row = reviews.Rows[i];
                Review rev = new Review();
                rev.reviewId = Int32.Parse(row["reviewId"].ToString());
                rev.userId = row["userId"].ToString();
                rev.gameId = Int32.Parse(row["gameId"].ToString());
                rev.date = row["date"].ToString();
                rev.description = row["description"].ToString();
                rev.rating = Int32.Parse(row["rating"].ToString());
                reviewArray[i] = rev;
            }
            return reviewArray;
        }

        [HttpPost("AddFavorite/{userId}/{reviewId}")]
        public bool Post(int reviewId, string userId)
        {
            DBConnect db = new DBConnect();
            int add = db.DoUpdate("insert into FavoriteReviews (userId, reviewId) values ('" + userId + "'," + reviewId + ")");
            if (add > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpDelete("DeleteFavorite/{userId}/{reviewId}")]
        public bool Delete(string userId, int reviewId)
        {
            DBConnect db = new DBConnect();
            var del = db.DoUpdate("delete from FavoriteReviews where userId='" + userId + "' and reviewId=" + reviewId);
            if (del > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpPut("ValidateUnique/{userId}/{reviewId}")]
        public bool Put(string userId, int reviewId)
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select 1 from FavoriteReviews where userId='" + userId + "' and reviewId=" + reviewId);
            DataTable reviews = ds.Tables[0];
            int count = reviews.Rows.Count;
            if (count > 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}