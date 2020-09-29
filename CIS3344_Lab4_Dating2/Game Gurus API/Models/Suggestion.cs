using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Game_Gurus_API.Models
{
    public class Suggestion
    {
        public int suggestionId { get; set; }
        public string gameTitle { get; set; }
        public string gameReleaseDate { get; set; }
        public string additionalInfo { get; set; }
        
        public Suggestion(string gameTitle, string gameReleaseDate, string additionalInfo)
        {
            this.suggestionId = 0;
            this.gameTitle = gameTitle;
            this.gameReleaseDate = gameReleaseDate;
            this.additionalInfo = additionalInfo;
        }
    }
}
