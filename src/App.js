import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/computer.css';
import Main from './components/main';
import { useEffect } from 'react';
function App() {
  seEffect(() => {
    document.title = 'SS Event'; // Set your desired title here
  }, []);
  useEffect(()=>{
    fetch('https://backend-sse.vercel.app/addOne', {
                method: 'put', // HTTP method is POST
                headers: {
                  'Content-Type': 'application/json', // Specify that the request body is in JSON format
                },
                body: JSON.stringify({
                  no:1,
                  date: new Date()
                }), // Convert the data to a JSON string and send it in the request body
              })
                .then(response => response.json()) // Parse the response as JSON
                .then(data => {
                  // console.log('Response from server:', data); // Log the response data to the console
                })
                .catch(error => {
                  console.error('Error sending data:', error); // Log any errors that occur during the request
             });
  },[])
  return (
    <div className="app">
      <Main/>
    </div>
  );
}

export default App;
