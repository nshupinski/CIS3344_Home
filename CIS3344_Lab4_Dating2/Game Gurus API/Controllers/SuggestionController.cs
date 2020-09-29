using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Game_Gurus_API.Models;
using System.Data;
using Utilities;

namespace Game_Gurus_API.Controllers
{
    [Route("api/Suggestion")]
    [ApiController]
    public class SuggestionController : ControllerBase
    {
        [HttpPost("AddSuggestion")]
        public bool Post([FromBody]Suggestion sug)
        {
            DBConnect db = new DBConnect();
            var add = db.DoUpdate("insert into GameSuggestions (gameTitle, gameReleaseDate, additionalInfo)" +
                "values ('" + sug.gameTitle + "','" + sug.gameReleaseDate + "','" + sug.additionalInfo + "')");
            if (add > 0)
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