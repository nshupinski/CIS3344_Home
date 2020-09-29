using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Gurus_API.Models
{
    public class Review
    {
        public int reviewId { get; set; }
        public int gameId { get; set; }
        public string userId { get; set; }
        public int rating { get; set; }
        public string description { get; set; }
        public string date { get; set; }
        public Review(int reviewId, int gameId, string userId, int rating, string description, string date) 
        {
            this.reviewId = reviewId;
            this.gameId = gameId;
            this.userId = userId;
            this.rating = rating;
            this.description = description;
            this.date = date;
        }
        public Review()
        {

        }
    }
}
