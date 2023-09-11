# Song Lyrics Web App

This web application provides a simple yet useful interface for searching and discovering songs and viewing their lyrics. The application uses the Genius API to search for songs based on the provided search term and displays the results on the webpage. 

## How to Use
IMP- Run this command in command prompt window. (This is to avoid CORS error)

For windows:
```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --user-data-dir=C:\tmpChromeSession
```
For Mac ios
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --disable-web-security --user-data-dir=/tmp/ChromeSession
```
1. Copy the link(github pages deployment) from description and paste it in the new chrome session that just opened.

2. You will see a search form at the top of the page with an input field and a search button.

3. Enter the name of the song you want to search for in the input field.

4. Click the "Search" button or press Enter.

5. The application will make a request to the Genius API and display up to 10 search results on the page.

6. Each search result will include the artist's name and a link to view the lyrics of the song.

7. Click the "Lyrics here" link to open the lyrics of the song in a new tab.

## Dependencies

- This application relies on the Fetch API to make requests to the Genius API.

## Screenshots
![Screenshot (20)](https://github.com/shrutiiigupta/LyricsApp/assets/98140693/7aae1665-2faa-40ca-b6d3-1ee9928ef031)

![Screenshot (21)](https://github.com/shrutiiigupta/LyricsApp/assets/98140693/7ea045fb-f634-4d23-9457-af91e027bda3)



## Access Token (Developer's Note)
- **API Access Token**: Developers can replace the API access token in the code to ensure seamless integration with the Genius API.

The Song Lyrics Web App offers a straightforward and efficient way for users to find song information and lyrics quickly. Its minimalistic design and real-time search results make it a user-friendly tool for music enthusiasts. Developers can further enhance and customize the application to meet specific requirements and integrate it with additional features or APIs.
Feel free to customize and enhance this web application to meet your specific requirements. Happy song searching!
