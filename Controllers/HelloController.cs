using System;
using Microsoft.AspNetCore.Mvc;

namespace SpyEmotions
{
    [Route("api/[Controller]")]
    public class HelloController : Controller 
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Hello from ASP.NET Core Web API.");
        }
    }
}