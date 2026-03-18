using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RagnarockGasolin.Models;

namespace RagnarockGasolin.Pages
{

    public class IndexModel : PageModel
    {
        public BandMember[] BandMembers { get; set; }
        public void OnGet()
        {
            BandMembers = new BandMember[]
            {
                new BandMember("Kim Larsen", "kim-larsen.jpg", "qrcode_kim-larsen.png"),
                new BandMember("Wili Jønsson", "wili-joensson.webp", "qrcode_wili-joensson.png"),
                new BandMember("Franz Beckerlee", "franz-beckerlee.webp", "qrcode_franz-beckerlee.png"),
                new BandMember("Søren Berlev", "soeren-berlev.jpg", "qrcode_soeren-berlev.png")
            };
        }
    }
}
