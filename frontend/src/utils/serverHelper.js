import { backendURL } from '../utils/config'

export const unathenticatedPOSTrequest = async (route, body) => {
  const response = await fetch(backendURL + route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
  const formattedResponse = await response.json();

  if (formattedResponse.success) {
    // Check if the response contains a user object with an _id
    if (formattedResponse.user && formattedResponse.user._id) {
      // Extract the user ID and store it in localStorage
      localStorage.setItem('userId', formattedResponse.user._id);
    }
  }

  return formattedResponse;
}



export const athenticatedGETrequest = async (route, body) => {
  const response = await fetch(backendURL + route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const formattedResponse = await response.json();

  if (formattedResponse.success) {
    // Check if the response contains a user object with an _id
    if (formattedResponse.user && formattedResponse.user._id) {
      // Extract the user ID and store it in localStorage
      localStorage.setItem('userId', formattedResponse.user._id);
    }
  }

  return formattedResponse;
}



// export const unathenticatedPOSTrequest = async (route, body) => {
//   const completeURL = backendURL + route;
//   console.log("Complete URL:", completeURL);

//   const response = await fetch(completeURL, {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify(body),
//   });

//   const formattedResponse = await response.json();

//   if (formattedResponse.success) {
//       if (formattedResponse.user && formattedResponse.user._id) {
//           localStorage.setItem('userId', formattedResponse.user._id);
//       }
//   }

//   return formattedResponse;
// }