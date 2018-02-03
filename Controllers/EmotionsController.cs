using System;
using System.IO;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace SpyEmotions {
    [Route ("api/[Controller]")]
    public class EmotionsController : Controller {

        [HttpGet]
        [Route ("[action]")]
        public IActionResult GetEmotions () {
            string imageFilePath = @"D:\Web\Hackaton\Int20Hackaton18\SpyEmotions\data\happy.jpg";
            var json = MakeRequest (imageFilePath, false).Result;
            return Ok(json);
        }

        [HttpPost]
        [Route ("[action]")]
        public IActionResult PostImageGetEmotions ([FromBody]ImageBase64 imageBase64) {
            var json = MakeRequest (imageBase64.imageBase64, true).Result;
            return Ok(json);
        }

        static byte[] GetImageAsByteArray (string imageFilePath) {
            FileStream fileStream = new FileStream (imageFilePath, FileMode.Open, FileAccess.Read);
            BinaryReader binaryReader = new BinaryReader (fileStream);
            return binaryReader.ReadBytes ((int) fileStream.Length);
        }

        static async Task<string> MakeRequest (string imageFile, bool base64) {
            var client = new HttpClient ();
            client.DefaultRequestHeaders.Add ("Ocp-Apim-Subscription-Key", "f9a2b7af71a54607989831b19a5f1c4a"); // 

            string uri = "https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?";
            HttpResponseMessage response;
            string responseContent;

            byte[] byteData = null;
            if (base64) {
                byteData = Convert.FromBase64String(imageFile);
            } else {
                byteData = GetImageAsByteArray(imageFile);  
            }

            using (var content = new ByteArrayContent (byteData)) {
                content.Headers.ContentType = new MediaTypeHeaderValue ("application/octet-stream");
                response = await client.PostAsync (uri, content);
                responseContent = response.Content.ReadAsStringAsync ().Result;
            }

            return responseContent;
        }
    }

    public class ImageBase64 {
        public string imageBase64 {get; set;}
    }
}