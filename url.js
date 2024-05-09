const baseUrl = "http://localhost:3000/"; // Replace with your actual base URL
let shortCodeMap = {}; // Stores mapping of long URLs to short codes

function encodeURL(longURL) {
  // Basic validation for URL format (can be improved)
  if (!/^https?:\/\/.+/.test(longURL)) {
    throw new Error("Invalid URL format");
  }

  // Generate a unique random alphanumeric string for short code
  let shortCode;
  do {
    shortCode = generateRandomString(6); // Customize the length here
  } while (shortCodeMap[shortCode]);

  // Store the mapping and return the shortened URL
  shortCodeMap[shortCode] = longURL;
  return baseUrl + shortCode;
}

function decodeURL(shortenedURL) {
  const shortCode = shortenedURL.split(baseUrl)[1];
  const longURL = shortCodeMap[shortCode];

  if (!longURL) {
    throw new Error("Invalid shortened URL");
  }

  // Redirect user to the original long URL
  console.log("Redirecting to:", longURL);
  // window.location.href = longURL; // Uncomment this line to enable redirection
}

function generateRandomString(length) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}

// Example usage
const longURL = "https://www.example.com/a-very-long-and-complex-url";
const shortenedURL = encodeURL(longURL);
console.log("Shortened URL:", shortenedURL);

// Simulate user clicking the shortened URL
decodeURL(shortenedURL);