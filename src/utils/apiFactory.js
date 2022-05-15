import axios from "axios";
import { dev } from "../env";

const apiInstance = axios.create({
  baseURL: "/api/",
  timeout: 10000,
});

export const createStream = (apiKey) => {
  const authorizationHeader = {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  };
  const streamName = "Testing";
  const streamProfiles = [
    {
      name: "720p",
      bitrate: 2000000,
      fps: 30,
      width: 1280,
      height: 720,
    },
    {
      name: "480p",
      bitrate: 1000000,
      fps: 30,
      width: 854,
      height: 480,
    },
    {
      name: "360p",
      bitrate: 500000,
      fps: 30,
      width: 640,
      height: 360,
    },
  ];

  try {
    const createStreamResponse = axios.post(
      // "https://livepeer.com/api/stream",
      `${dev.BASE_URL}/api/stream/create`,
      // "http://localhost:5000/user/add",
      {
        api_key: apiKey,
        name: streamName,
        profiles: streamProfiles,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: authorizationHeader.headers.authorization, // API Key needs to be passed as a header
        },
      }
    );

    return createStreamResponse;
    if (createStreamResponse) {
      return { data: createStreamResponse };
      // res.statusCode = 200;
      // res.json({ ...createStreamResponse.data });
    } else {
      // res.statusCode = 500;
      // res.json({ error: "Something went wrong" });
    }
  } catch (error) {
    // res.statusCode = 500;

    // Handles Invalid API key error
    if (error.response.status === 403) {
      // res.statusCode = 403;
    }
    // res.json({ error });
  }
};

export const getStreamStatus = (apiKey, streamId) => {
  const authorizationHeader = {
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${apiKey}`,
    },
  };

  try {
    const createStreamResponse = axios.post(
      `${dev.BASE_URL}/api/stream`,
      {
        api_key: apiKey,
        stream_id: streamId,
      },
      {
        headers: {
          "content-type": "application/json",
          authorization: authorizationHeader.headers.authorization, // API Key needs to be passed as a header
        },
      }
    );

    return createStreamResponse;
    if (createStreamResponse) {
      return { data: createStreamResponse };
      // res.statusCode = 200;
      // res.json({ ...createStreamResponse.data });
    } else {
      // res.statusCode = 500;
      // res.json({ error: "Something went wrong" });
    }
  } catch (error) {
    // res.statusCode = 500;

    // Handles Invalid API key error
    if (error.response.status === 403) {
      // res.statusCode = 403;
    }
    // res.json({ error });
  }
};

// export const getStreamStatus = (
//   apiKey,
//   streamId
// ) => {
//   return apiInstance.get(`/stream/${streamId}`, {
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${apiKey}`,
//     },
//   });
// };

// const getStreamStatus = async (req, res) => {
//   if (req.method === "GET") {
//     const authorizationHeader = req.headers && req.headers["authorization"];
//     const streamId = req.query.streamId;
//     try {
//       const streamStatusResponse = await axios.get(
//         `https://livepeer.com/api/stream/${streamId}`,
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: authorizationHeader, // API Key needs to be passed as a header
//           },
//         }
//       );

//       if (streamStatusResponse && streamStatusResponse.data) {
//         res.statusCode = 200;
//         res.json({ ...streamStatusResponse.data });
//       } else {
//         res.statusCode = 500;
//         res.json({ error: "Something went wrong" });
//       }
//     } catch (error) {
//       res.statusCode = 500;
//       res.json({ error });
//     }
//   }
// };
