using System;
using System.Collections.Generic;
using MetroCardManagementAPI;
using Microsoft.AspNetCore.Mvc;

namespace MetroCardManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TicketFairDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
       public TicketFairDetailsController(ApplicationDBContext applicationDBContext)
       {
        _dbContext=applicationDBContext;
       }

        // GET: api/Contacts
        [HttpGet]
        public IActionResult GetTickets()
        {
            return Ok(_dbContext.ticketList.ToList());
        }

        // GET: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetTicket(int id)
        {
            var ticket = _dbContext.ticketList.FirstOrDefault(m => m.TicketID == id);
            if (ticket == null)
            {
                return NotFound();
            }
            return Ok(ticket);
        }

        //Adding a new medicine
        // POST: api/Contacts
        
      
        [HttpPost]
        public IActionResult PostUser([FromBody] TicketFairDetails user)
        {
            _dbContext.ticketList.Add(user);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing medicine
        // PUT: api/Contacts/1
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] TicketFairDetails ticket)
        {
            var ticketold = _dbContext.ticketList.FirstOrDefault(m=>m.TicketID==id);
            if (ticketold== null)
            {
                return NotFound();
            }
          ticketold.FromLocation=ticket.FromLocation;
          ticketold.ToLocation=ticket.ToLocation;
          ticketold.TicketPrice=ticket.TicketPrice;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing medicine
        // DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var ticket = _dbContext.ticketList.FirstOrDefault(m => m.TicketID== id);
            if (ticket == null)
            {
                return NotFound();
            }
            _dbContext.ticketList.Remove(ticket);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
       
    }
}
