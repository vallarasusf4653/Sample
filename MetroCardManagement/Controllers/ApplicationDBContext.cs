using Microsoft.EntityFrameworkCore;



namespace MetroCardManagementAPI.Controllers
{


    public class ApplicationDBContext : DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<UserDetails> userList {get; set;}
        public DbSet <TicketFairDetails> ticketList {get; set;}
        public DbSet <TravelHistoryDetails> travelList {get; set;}
    }
}