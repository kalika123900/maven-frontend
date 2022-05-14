import React from "react";

import "./Live.css";

const APIKeyForm = ({ setApiKey }) => {
  const submitHandler = (event) => {
    const { apiKey } = event.target;
    setApiKey(apiKey.value);
  };

  return (
    <form
      className="video-streamingForm px-4 h-3/5 flex justify-center flex-col lg:max-w-screen-md m-auto"
      onSubmit={submitHandler}
    >
      <h1>ENTER STREAMING KEY</h1>
      <input
        type="text"
        placeholder="api key"
        className="border developer-key-placeholder active:border-livepeer p-2 w-full rounded"
        name="apiKey"
      />
      <input
        className="streaming-key-button"
        type="submit"
        value="Get Streaming Key"
      />
      {/* <label className="text-sm text-gray-400 text-right">
        Press <strong>Enter</strong> to submit
      </label> */}
      {/* <div className="py-6 text-sm text-gray-800">
        Find out how to get your API key{" "}
        <a
          href="https://livepeer.com/docs/guides/api-keys/create-an-api-key"
          className="text-blue-500 underline"
        >
          here
        </a>
      </div> */}

      <div className="video-streaming-details">
        <div className="how-to-get">How to get API key?</div>
        <div className="solution-live-peer">
          <ol>
            <li>
              Go to <a href="https://livepeer.org/"></a>
            </li>
            <li>Login to Livepeer</li>
            <li>Goto Developr Section</li>
            <li>Create developer key</li>
            <li>Copy and paste the developer key to below form</li>
          </ol>
        </div>
      </div>
    </form>
  );
};

export default APIKeyForm;
