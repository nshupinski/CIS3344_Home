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
    [Route("api/Game")]
    [ApiController]
    public class GameController : ControllerBase
    {
        [HttpGet]
        [HttpGet("GetGames")]
        public Game[] Get()
        {
            DBConnect db = new DBConnect();
            DataSet ds = db.GetDataSet("select * from Games");
            DataTable games = ds.Tables[0];
            Game[] gameArray = new Game[games.Rows.Count];

            for (int i = 0; i < games.Rows.Count; i++)
            {
                Game currentGame = new Game();
                currentGame.id = int.Parse(games.Rows[i]["id"].ToString());
                currentGame.title = games.Rows[i]["title"].ToString();
                currentGame.genre = games.Rows[i]["genre"].ToString();
                currentGame.rating = games.Rows[i]["rating"].ToString();
                currentGame.image = games.Rows[i]["image"].ToString();
                currentGame.releaseDate = games.Rows[i]["releaseDate"].ToString();
                currentGame.developer = games.Rows[i]["developer"].ToString();
                currentGame.description = games.Rows[i]["description"].ToString();
                gameArray[i] = currentGame;
            }

            return gameArray;
        }
    }
}