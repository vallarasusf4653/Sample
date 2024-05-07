using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MetroCardManagementAPI;

[Table("TravelHistoryDetails", Schema = "public")]
public class TravelHistoryDetails
{
    // travelID: number;
    // cardNumber: number;
    // fromLocation: string;
    // toLocation: string;
    // date: Date
    // trvelCost: number;
    [Key]
    public int TravelID { get; set; }
    public int CardNumber { get; set; }
    public string FromLocation { get; set; }
    public string ToLocation { get; set; }
    public DateTime Date { get; set; }
    public double TravelCost { get; set; }
    
    
    
    
    
    
    
    
}