
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace MetroCardManagementAPI;

[Table("UserDetails", Schema = "public")]
public class UserDetails
{
    [Key]
    public int CardNumber { get; set; }
    public string UserName { get; set; }
    public string UserEmail { get; set; }
    public string Password { get; set; }
    public double Balance { get; set; }
    
    
    
    
    
    
}