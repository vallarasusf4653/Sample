using System;
using System.Collections.Generic;
using MetroCardManagementAPI;
using Microsoft.AspNetCore.Mvc;

namespace MetroCardManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelHistoryDetailsController : ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
       public TravelHistoryDetailsController(ApplicationDBContext applicationDBContext)
       {
        _dbContext=applicationDBContext;
       }


        // GET: api/Contacts
        [HttpGet]
        public IActionResult GetTravelHistory()
        {
            return Ok(_dbContext.travelList.ToList());
        }

        // GET: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetTravel(int id)
        {
            var travel =_dbContext.travelList.FirstOrDefault(m => m.TravelID == id);
            if (travel == null)
            {
                return NotFound();
            }
            return Ok(travel);
        }

        //Adding a new medicine
        // POST: api/Contacts
        [HttpPost]
        public IActionResult PostTravel([FromBody] TravelHistoryDetails travel)
        {
           _dbContext.travelList.Add(travel);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

      
      
    }
}
