using System.Net.Http;

using System;

using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc;

namespace ReactWithDotNet.Controllers
{
[ApiController]
[Route("api/[controller]")]

public class MessageController : ControllerBase
{

       
        private readonly IHttpClientFactory _clientFactory;
        private readonly ILogger<MessageController> _logger;
        public MessageController(IHttpClientFactory clientFactory, ILogger<MessageController> logger)
        {
            _clientFactory = clientFactory;
            _logger = logger;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            try
            {
                // Create an instance of HttpClient
                using (HttpClient client = _clientFactory.CreateClient())
                {
                    // Define the base URL of the API
                    string baseUrl = "https://jsonplaceholder.typicode.com/";

                    // Define the specific endpoint you want to call
                    string endpoint = "users"; // Replace with the actual endpoint

                    // Combine the base URL and endpoint to form the full URL
                    string apiUrl = $"{baseUrl}{endpoint}";

                    // Make the GET request to the API
                    HttpResponseMessage response = await client.GetAsync(apiUrl);

                    // Check if the response is successful

                    if (response.IsSuccessStatusCode)
                    {
                        // Read the content as a string
                        string responseContent = await response.Content.ReadAsStringAsync();
                        return Ok(responseContent);
                    }
                    else
                    {
                        return StatusCode((int)response.StatusCode, "API request failed.");
                    }
                }
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred");
                return StatusCode(500, "An error occurred: " + ex.Message);
            }
        }



    }

}
