using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MetroCardManagementAPI;
[Table("TicketFairDetails", Schema = "public")]
public class TicketFairDetails
{
    //  ticketID: number;
    // fromLocation: string;
    // toLocation: string;
    // ticketPrice: number;
    [Key]
    public int TicketID { get; set; }
    public string FromLocation{ get; set; }
    public string ToLocation { get; set; }
    public  double TicketPrice { get; set; }
    
    
    
    
    
}