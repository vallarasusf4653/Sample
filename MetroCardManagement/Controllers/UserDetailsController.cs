using System;
using System.Collections.Generic;
using MetroCardManagementAPI;
using Microsoft.AspNetCore.Mvc;

namespace MetroCardManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDetailsController : ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
       public UserDetailsController(ApplicationDBContext applicationDBContext)
       {
        _dbContext=applicationDBContext;
       }

        // GET: api/Contacts
        [HttpGet]
        public IActionResult GetUsers()
        {
            return Ok(_dbContext.userList.ToList());
        }

        // GET: api/Contacts/1
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.userList.FirstOrDefault(m => m.CardNumber == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        //Adding a new medicine
        // POST: api/Contacts
        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            _dbContext.userList.Add(user);
            _dbContext.SaveChanges();
            // You might want to return CreatedAtAction or another appropriate response
            return Ok();
        }

        // Updating an existing medicine
        // PUT: api/Contacts/1
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserDetails user)
        {
            var userOld = _dbContext.userList.FirstOrDefault(m => m.CardNumber == id);
            if (userOld== null)
            {
                return NotFound();
            }
            userOld.UserName=user.UserName;
            userOld.UserEmail=user.UserEmail;
            userOld.Password=user.Password;
            userOld.Balance=user.Balance;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        // Deleting an existing medicine
        // DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.userList.FirstOrDefault(m => m.CardNumber== id);
            if (user == null)
            {
                return NotFound();
            }
            _dbContext.userList.Remove(user);
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }
    }
}
