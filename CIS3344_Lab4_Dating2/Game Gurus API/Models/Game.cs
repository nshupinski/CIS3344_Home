using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Gurus_API.Models
{
    public class Game
    {
        public int id { get; set; }
        public string title { get; set; }
        public string rating { get; set; }
        public string genre { get; set; }
        public string image { get; set; }
        public string releaseDate { get; set; }
        public string developer { get; set; }
        public string description { get; set; }
        public Game(int id, string title, string rating, string genre, string image, string releaseDate, string developer, string description)
        {
            this.id = id;
            this.title = title;
            this.rating = rating;
            this.genre = genre;
            this.image = image;
            this.releaseDate = releaseDate;
            this.developer = developer;
            this.description = description;
        }
        public Game()
        {

        }

    }
}

