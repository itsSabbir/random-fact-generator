# Random Fact Generator

The Random Fact Generator is a web application that provides users with random facts sourced from validated online platforms. It features web scraping, database integration, and AI-generated images.

# NOTE: I will be pivoting to make this into an extension in the future.

## Current State

The project is in its early stages of development. The foundational structure has been laid out, and several components have been implemented.

### Project Structure

#### Backend:
  - `server.js`: Sets up the Express server, handles basic routing, and serves the main page. Includes error handling middleware.
  - `factScraper.js`: Contains the web scraping logic to fetch facts from designated sources like Wikipedia, Britannica, and Mayo Clinic.
  - `fact.js`: Defines the database model for facts using Mongoose. It includes fields for the fact text and source.

#### Frontend:
  - `index.html`: The main HTML file for the frontend. Includes the structure for displaying facts and a button to generate new ones.
  - `styles.css`: Contains the styling for the frontend. Basic styling is defined for the container and button.
  - `script.js`: Handles frontend interactivity. Includes an AJAX request to fetch facts from the backend and update the UI.

#### Additional Components:
  - `imageGenerator.js`: Integrates with DALL-E to generate images based on the facts' location and weather conditions.

### Dependencies

- `express`: The Express.js framework for setting up the server.
- `mongoose`: For MongoDB object modeling.
- `axios`: For making HTTP requests.
- `cheerio`: For parsing HTML and scraping data.
- `dotenv`: For managing environment variables.

## Future Enhancements

1. **Web Scraping**:
   - Improve error handling and implement rate limiting in `factScraper.js` to ensure respectful and reliable scraping.

2. **Database Integration**:
   - Finalize and optimize the database schema in `fact.js`.
   - Implement additional database queries and functionalities.

3. **Frontend Enhancements**:
   - Further enhance the UI/UX in `index.html` and `styles.css`.
   - Expand AJAX functionality in `script.js` to handle more user interactions and edge cases.

4. **API Routes**:
   - Design and implement additional API routes in `server.js` to add new facts, update existing ones, etc.

5. **Performance & Security**:
   - Implement caching strategies for better performance.
   - Ensure security measures are in place, especially if user-generated content or accounts are introduced.

6. **Image Integration**:
   - Enhance `imageGenerator.js` to better integrate AI-generated images with the facts.

7. **Deployment**:
   - Prepare the app for deployment using platforms like Heroku or Vercel.

## Contributions

This project is currently under active development. Contributions are welcome. If interested, please reach out or submit a pull request.

## License

This project is licensed under the [GNU General Public License Version 3 (GPLv3)](LICENSE), dated 29 June 2007.
