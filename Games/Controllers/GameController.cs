using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Games.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Games.Controllers
{
	[ApiController]
	[Route("[controller]")]
	[Authorize]
	public class GameController : ControllerBase
	{
		[HttpGet]
		public IEnumerable<GameModel> Get()
		{
			return new List<GameModel>()
			{
				new GameModel() { Id = 4, Title = "Red Dead Redemption 2" },
				new GameModel() { Id = 8, Title = "GTA V" },
				new GameModel() { Id = 15, Title = "Max Payne" }
			};
		}
	}
}
